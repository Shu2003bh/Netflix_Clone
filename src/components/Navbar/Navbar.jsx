// import React, { useEffect, useRef } from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.png'
// import search_icon from '../../assets/search_icon.svg'
// import bell_icon from '../../assets/bell_icon.svg'
// import profile_img from '../../assets/profile_img.png'
// import caret_icon from '../../assets/caret_icon.svg'
// import { logout } from '../../firebase'


// const Navbar = () => {
//     const navref = useRef();
//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             if (window.scrollY >= 80) {
//                 navref.current.classList.add("nav-dark");
//             } else {
//                 navref.current.classList.remove("nav-dark");
//             }
//         })
//     }, [])
//   return (
//     <div className='navbar' ref={navref}>
//         <div className="navbar-left">
//             <img src={logo} alt="" srcset="" />
//             <ul>
//                 <li>Home</li>
//                 <li>TV Shows</li>
//                 <li>Movies</li>
//                 <li>New & Popular </li>
//                 <li>My List</li>
//                 <li>Browse</li>
//             </ul>
//         </div>
//         <div className="navbar-right">
//                 <img src={search_icon} alt="" srcset="" className='icons' />
//             <p>Children</p>
//             <img src={bell_icon} alt="" srcset="" className='icons' />
//             <div className="navbar-profile">
//                 <img src={profile_img} alt="" srcset="" className='Profile' />
//                 <img src={caret_icon} alt=""  />
//                 <div className="dropdown">
//                     <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
//                 </div>

//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Navbar

import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = ({ onSearch }) => {

    const navref = useRef();

    // 🔍 NEW STATES
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 80) {
                navref.current.classList.add("nav-dark");
            } else {
                navref.current.classList.remove("nav-dark");
            }
        })
    }, [])

    // 🔍 SEARCH INPUT HANDLER
    const handleSearchInput = (e) => {
        setQuery(e.target.value);
        if(onSearch) onSearch(e.target.value);
    }

    return (
        <div className='navbar' ref={navref}>
            <div className="navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular </li>
                    <li>My List</li>
                    <li>Browse</li>
                </ul>
            </div>

            <div className="navbar-right">

                {/* 🔍 SEARCH ICON (TOGGLE INPUT) */}
                <img 
                    src={search_icon} 
                    className='icons'
                    onClick={() => setShowSearch(!showSearch)}
                    style={{ cursor: "pointer" }}
                />

                {/* 🔍 SEARCH INPUT (ONLY WHEN TOGGLED) */}
                {showSearch && (
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={query}
                        onChange={handleSearchInput}
                        className="search-input"
                    />
                )}

                <p>Children</p>
                <img src={bell_icon} className='icons' />

                <div className="navbar-profile">
                    <img src={profile_img} className='Profile' />
                    <img src={caret_icon} />
                    <div className="dropdown">
                        <p onClick={() => { logout() }}>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar


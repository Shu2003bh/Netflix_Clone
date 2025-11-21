// import React from 'react'

// import './Home.css'

// import Navbar from '../../components/Navbar/Navbar'

// import heroBanner from '../../assets/hero_banner.jpg'

// import heroTitle from '../../assets/hero_title.png'

// import play_icon from '../../assets/play_icon.png'

// import info_icon from '../../assets/info_icon.png'

// import TitleCards from '../../components/TitleCards/TitleCards'

// import Footer from '../../components/Footer/Footer'



// const Home = () => {

//   return (

//     <div className='home'>

//       <Navbar />

//       <div className="hero">

//         <img src={heroBanner} alt="" className='banner-img' />

//         <div className="hero-caption">

//           <img src={heroTitle} alt="" className='caption-img' />

//           <p> Bob Odenkirk returns as Hutch, an overworked assassin who just needs a break, in this bare-knuckle action-thriller. After deciding to take his family to a tourist town for some fun in the sun, a minor encounter with local bullies yanks the family into the crosshairs of an unhinged, blood-thirsty crime boss who is determined to derail his relaxation.</p>

//           <div className="hero-btns">

//             <button className='btn'><img src={play_icon} alt="Play" />Play</button>

//             <button className='btn dark-btn'><img src={info_icon} alt="Info" />More Info</button>

//           </div>

//           <TitleCards></TitleCards>

//         </div>

//       </div>

//       <div className="more-cards">

//         <TitleCards title="BlockBuster Movies" category={"top_rated"}></TitleCards>

//         <TitleCards title="Only On Netflix" category={"popular"}></TitleCards>

//         <TitleCards title="Upcoming" category={"now_playing"}></TitleCards>

//         <TitleCards title="Topics For You" category={"upcoming"}></TitleCards>

//       </div>

//       <Footer></Footer>

//     </div>

//   );

// }



// export default Home
// import React, { useState } from 'react';
// import './Home.css';
// import Navbar from '../../components/Navbar/Navbar';
// import heroBanner from '../../assets/hero_banner.jpg';
// import heroTitle from '../../assets/hero_title.png';
// import play_icon from '../../assets/play_icon.png';
// import info_icon from '../../assets/info_icon.png';
// import TitleCards from '../../components/TitleCards/TitleCards';
// import Footer from '../../components/Footer/Footer';
// import SearchBar from '../../components/SearchBar/SearchBar';

// const Home = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

//   const handleSearch = async (query) => {
//     setLoading(true);
//     try {
//       const apiKey = import.meta.env.REACT_APP_RAPID_API_KEY;
//       const res = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
//       );
//       const data = await res.json();
//       setSearchResults(data.results || []);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="home">
//       <Navbar />

//       {/* ✅ Search bar just below navbar */}
//       <SearchBar onSearch={handleSearch} />

//       <div className="hero">
//         <img src={heroBanner} alt="" className="banner-img" />
//         <div className="hero-caption">
//           <img src={heroTitle} alt="" className="caption-img" />
//           <p>
//             Bob Odenkirk returns as Hutch, an overworked assassin who just needs a break, in this bare-knuckle action-thriller...
//           </p>
//           <div className="hero-btns">
//             <button className="btn">
//               <img src={play_icon} alt="Play" />
//               Play
//             </button>
//             <button className="btn dark-btn">
//               <img src={info_icon} alt="Info" />
//               More Info
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Show Search Results if any */}
//       {searchResults.length > 0 && (
//         <div className="search-results">
//           <h2>Search Results</h2>
//           <div className="movie-grid">
//             {searchResults.map((movie) => (
//               <div key={movie.id} className="movie-card">
//                 <img
//                   src={
//                     movie.poster_path
//                       ? `${IMAGE_BASE}${movie.poster_path}`
//                       : 'https://via.placeholder.com/300x450?text=No+Image'
//                   }
//                   alt={movie.title}
//                 />
//                 <p>{movie.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ✅ Default Content when no search */}
//       {searchResults.length === 0 && (
//         <div className="more-cards">
//           <TitleCards title="BlockBuster Movies" category="top_rated" />
//           <TitleCards title="Only On Netflix" category="popular" />
//           <TitleCards title="Upcoming" category="now_playing" />
//           <TitleCards title="Topics For You" category="upcoming" />
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useState, useRef, useEffect } from 'react'

import './Home.css'
import Navbar from '../../components/Navbar/Navbar'

import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import SearchModal from '../../components/SearchModal/SearchModal'

const apiKey = import.meta.env.VITE_API_KEY; // TMDB API KEY

const Home = () => {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const timerRef = useRef(null);

  console.log("API Key:", apiKey);

  // ------------------ 🔍 SEARCH LOGIC ------------------
  const handleSearch = (query) => {
    clearTimeout(timerRef.current);

    if (query) setShowModal(true);
    else setShowModal(false);

    timerRef.current = setTimeout(async () => {
      if (!query) return setResults([]);

      setLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      const data = await res.json();

      setResults(data.results || []);
      setLoading(false);
    }, 600);
  };

  // 🔙 ESC key to close modal
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  // ----------------------------------------------------

  return (
    <div className='home'>

      {/* Navbar */}
      <Navbar onSearch={handleSearch} />

      {/* Bottom Modal */}
      {showModal && (
        <SearchModal 
          results={results}
          loading={loading}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Original UI — untouched */}
      <div className="hero">
        <img src={heroBanner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={heroTitle} alt="" className='caption-img' />
          <p> Bob Odenkirk returns as Hutch, an overworked assassin...</p>

          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="Play" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="Info" />More Info</button>
          </div>

          <TitleCards />
        </div>
      </div>


      <div className="more-cards">
        <TitleCards title="BlockBuster Movies" category={"top_rated"} />
        <TitleCards title="Only On Netflix" category={"popular"} />
        <TitleCards title="Upcoming" category={"now_playing"} />
        <TitleCards title="Topics For You" category={"upcoming"} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;

import React from 'react'

import './Home.css'

import Navbar from '../../components/Navbar/Navbar'

import heroBanner from '../../assets/hero_banner.jpg'

import heroTitle from '../../assets/hero_title.png'

import play_icon from '../../assets/play_icon.png'

import info_icon from '../../assets/info_icon.png'

import TitleCards from '../../components/TitleCards/TitleCards'

import Footer from '../../components/Footer/Footer'



const Home = () => {

  return (

    <div className='home'>

      <Navbar />

      <div className="hero">

        <img src={heroBanner} alt="" className='banner-img' />

        <div className="hero-caption">

          <img src={heroTitle} alt="" className='caption-img' />

          <p> Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>

          <div className="hero-btns">

            <button className='btn'><img src={play_icon} alt="Play" />Play</button>

            <button className='btn dark-btn'><img src={info_icon} alt="Info" />More Info</button>

          </div>

          <TitleCards></TitleCards>

        </div>

      </div>

      <div className="more-cards">

        <TitleCards title="BlockBuster Movies" category={"top_rated"}></TitleCards>

        <TitleCards title="Only On Netflix" category={"popular"}></TitleCards>

        <TitleCards title="Upcoming" category={"now_playing"}></TitleCards>

        <TitleCards title="Topics For You" category={"upcoming"}></TitleCards>

      </div>

      <Footer></Footer>

    </div>

  );

}



export default Home
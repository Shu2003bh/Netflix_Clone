import React, { useRef, useEffect, useState } from 'react'

import './TitleCards.css'

import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'







const TitleCards = ({ title, category }) => {


  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzNmYmJkMGMzNDY3ODJkMDY5NDlkYWUzMThlOGM3YyIsIm5iZiI6MTc1OTc0ODgyOS43ODQ5OTk4LCJzdWIiOiI2OGUzYTJkZDBjMDViMzM4ZWM5NjFhNWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5ApYLM-4zNQIhXsMSngZopclSwdY4KIiOjNquJEFHlo'
    }
  };



  const handleWheel = (e) => {

    e.preventDefault();

    cardsRef.current.scrollLeft += e.deltaY;

  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);


  }, []);

  return (

    <div className='title-cards'>

      <h2>{title ? title : "Popular on Netflix"} </h2>

      <div className='cards-list' ref={cardsRef}>

        {apiData.map((card, index) => (

          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img className='img' src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>


        ))}

      </div>

    </div>

  )

}

export default TitleCards
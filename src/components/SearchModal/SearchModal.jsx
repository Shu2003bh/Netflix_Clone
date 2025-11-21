import React from "react";
import "./SearchModal.css";

const SearchModal = ({ results, loading, onClose }) => {
  return (
    <div className="search-modal-container" onClick={onClose}>

      <div className="search-modal-panel" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <h2>Search Results</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        {loading && <p style={{ color: "white" }}>Loading...</p>}

        <div className="modal-grid">
          {results.map(movie => (
            <img 
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="modal-poster"
              alt=""
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SearchModal;

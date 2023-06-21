import React, { useState, useEffect } from "react";
import "./Landing.css";
import { API } from "../General";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Landing() {
  const [movies, setmovieslist] = useState([]);
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  // console.log(token);
  const getData = () => {
    fetch(`${API}/movies`, {
      method: "GET",
      headers: {
        "x-auth-token": token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setmovieslist(result);
      });
  }

  const viewMovie = (movie) => {
    console.log(movie);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="movies-lists">
        {movies.length > 0 && movies.map((movie, index) => {
          return (
            <div className="card" key={index}>
              <img src={movie.poster} alt={movie.name} className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{movie.name}</h2>
                <div className="card-rating">Year : {movie.year}</div>
                <p className="card-description">{movie.summary}</p>
                <div className="card-actors">
                  {movie.actors.map((actor, index) => {
                    return (
                      <div className="actor" key={index}>
                        {actor.name}
                      </div>
                    );
                  })}
                </div>
                <div className="card-options">
                  <button
                    onClick={() => {
                      viewMovie(movie);
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/movie/edit/${movie._id}`);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Landing;

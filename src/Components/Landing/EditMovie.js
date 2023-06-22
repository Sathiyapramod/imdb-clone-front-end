import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../General";
import { useSelector } from "react-redux";
import "../Login/Login.css";
import "./Landing.css";

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);

  const [movie, setMovie] = useState({});
  const [newName, setNewName] = useState("");
  const [newYear, setNewYear] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const getData = () => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setMovie(result);
      });
  };

  const handleSubmit = () => {
    const NewDetails = {
      name: newName,
      year: newYear,
      summary: newSummary,
    };

    fetch(`${API}/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(NewDetails),
      headers: {
        "Content-type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate("/home");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Edit Movie Details</h1>
      <p>{id}</p>
      <div className="edit-movie">
        <div className="poster">
          <img src={movie.poster} alt="movie" width={300} height={400} />
        </div>
        <div className="movie-name">
          <label>Name</label>
          <input
            type="text"
            className="input-text"
            defaultValue={movie.name}
            onChange={(event) => {
              setNewName(event.target.value);
              console.log(event.target.value);
            }}
          />
        </div>
        <div className="year">
          <label>Year</label>
          <input
            type="text"
            className="input-text"
            defaultValue={movie.year && movie.year}
            onChange={(event) => setNewYear(event.target.value)}
          />
        </div>
        <div className="summary">
          <label>Summary</label>
          <textarea
            type="text"
            className="input-text"
            defaultValue={movie.summary}
            rows={8}
            onChange={(event) => setNewSummary(event.target.value)}
          />
        </div>
      </div>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default EditMovie;

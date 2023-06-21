import React from "react";
import { useParams } from "react-router-dom";
import "../Login/Login.css";
import "./Landing.css";

function EditMovie() {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Movie Details</h1>
      <p>{id}</p>
      <div className="edit-movie">
        <div className="movie-name">
          <label>Name</label>
          <input type="text" className="input-text" />
        </div>
        <div className="year">
          <label>Year</label>
          <input type="text" className="input-text" />
        </div>
        <div className="summary">
          <label>Summary</label>
          <input type="text" className="input-text" />
        </div>
      </div>
    </div>
  );
}

export default EditMovie;

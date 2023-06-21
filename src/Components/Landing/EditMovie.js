import React from "react";
import { useParams } from "react-router-dom";

function EditMovie() {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Movie Details</h1>
      <p>{id}</p>
    </div>
  );
}

export default EditMovie;

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Landing.css";

//validation

//name - required
//year - required
//summary - optional
//poster - optional

//actors - array list = required
//director - array list - required
//producer - required

const validationForMovie = yup.object({
  name: yup.string().required("enter valid movie name"),
  year: yup
    .string()
    .required("enter valid year")
    .min(1900, "Enter year above 1900")
    .max(2023, "Enter upto present year"),
  summary: yup
    .string()
    .min(10, "Enter valid summary")
    .max(50, "Summary too long"),
  poster: yup.string(),
});

function Addmovie() {
  const formik = useFormik({
    initialValues: {
      name: "",
      year: "",
      summary: "",
      poster: "",
      actors: [],
      director: {},
      producer: [],
    },
    validationSchema: validationForMovie,
    onSubmit: (movie) => {
      console.log(movie);
    },
  });

  return (
    <div className="add-movie-form">
      <form onSubmit={formik.handleSubmit}>
        <div className="add-movie-name">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <br />
        </div>
        <span className="errors">
          {formik.touched.name && formik.errors.name && formik.errors.name}
        </span>
        <div className="add-movie-name">
          <label>Year</label>
          <input
            type="text"
            name="year"
            id="year"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
          />
        </div>
        <span className="errors">
          {formik.touched.year && formik.errors.year && formik.errors.year}
        </span>
        <div className="add-movie-name">
          <label>Summary</label>
          <textarea
            type="text"
            name="summary"
            id="summary"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.summary}
          />
        </div>
        <span className="errors">
          {formik.touched.summary &&
            formik.errors.summary &&
            formik.errors.summary}
        </span>
        <div className="add-movie-name">
          <label>Poster</label>
          <input
            type="text"
            name="poster"
            id="poster"
            value={formik.values.poster}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <span className="errors">
          {formik.touched.poster &&
            formik.errors.poster &&
            formik.errors.poster}
        </span>
      </form>
    </div>
  );
}

export default Addmovie;

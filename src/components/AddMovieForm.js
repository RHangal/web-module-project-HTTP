import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import axios from "axios";

const AddMovieForm = () => {
  const navigate = useNavigate();

  const initialNewMovie = {
    title: "",
    director: "",
    genre: "",
    metascore: "",
    description: "",
    id: nanoid(5),
  };
  const [newMovie, setNewMovie] = useState(initialNewMovie);

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/movies", newMovie)
      .then((res) => {
        console.log(res), navigate("/movies");
      })
      .catch((err) => console.error(err));
  };

  const { title, director, genre, metascore, description } = newMovie;

  return (
    <div className="col">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h4 className="modal-title">
              Editing <strong>{title}</strong>
            </h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Title</label>
              <input
                value={title}
                onChange={handleChange}
                name="title"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Director</label>
              <input
                value={director}
                onChange={handleChange}
                name="director"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Genre</label>
              <input
                value={genre}
                onChange={handleChange}
                name="genre"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Metascore</label>
              <input
                value={metascore}
                onChange={handleChange}
                name="metascore"
                type="number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={description}
                onChange={handleChange}
                name="description"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <input type="submit" className="btn btn-info" value="Add" />
            <input type="button" className="btn btn-default" value="Cancel" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;

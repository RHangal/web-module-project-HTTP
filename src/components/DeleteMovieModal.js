import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

const DeleteMovieModal = (props) => {
  const { deleteMovie } = props;

  const navigate = useNavigate();

  const { id } = useParams();

  const handleClick = (e) => {
    e.preventDefault();
    deleteMovie(id);
    navigate("/movies");
  };

  return (
    <div id="deleteEmployeeModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Delete Employee</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete these Records?</p>
              <p className="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input
                onClick={handleClick}
                type="submit"
                className="btn btn-danger"
                value="Delete"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovieModal;

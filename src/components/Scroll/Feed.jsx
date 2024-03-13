import React from "react";

export default function Feed({ post }) {
  return (
    <div className="row">
      <div className="card text-center">
        <div className="card-body">
          <p className="card-text">{post}</p>
          <a className="btn btn-dark btn-sm home-btn" href="#" role="button">
            Translate
          </a>
        </div>
      </div>
    </div>
  );
}

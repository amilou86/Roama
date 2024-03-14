import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useState, useRef } from "react";

export default function Post() {
  const inputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((event) => event.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
    // setImage(URL.createObjectURL(event.target.files[0]))
  };
  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i != index)
    );
  };

  return (
    <div className="main-post-init">
      <button type="button" className="btn btn-primary init-post" data-bs-toggle="modal" data-bs-target="#post">
        Post
      </button>

      <div className="modal fade" id="post" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="post">
                Post a Roama
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center main-section">
              <div className="profile-image pe-3">
                <img src={""} alt="profile image" className="image-box" />
              </div>
              <form className="flex-fill form-text">
                <div className="mb-3 flex-fill">
                  <label
                    htmlFor="message-text"
                    className="col-form-label"
                  ></label>
                  <textarea className="form-control input-area" id="message-text" placeholder="Type your Message here"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="row p-4">
              {images.map((images, index) => (
                <div className="image" key={index}>
                  <span className="delete" onClick={() => deleteImage(index)}>
                    &times;
                  </span>
                  <img src={images.url} alt={images.name} />
                </div>
              ))}
            </div>
            <div className="d-flex post-options">
              <div className="img-upload">
                <input multiple ref={inputRef} style={{ display: "none" }} type="file" onChange={handleFileChange}/>
                <AiOutlinePicture onClick={handleClick} />
                <p>Upload Image</p>
              </div>
            </div>
            <div className="modal-footer footer-btn">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary post-btn ">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

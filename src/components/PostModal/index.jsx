import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function Post() {
    return (
        <div>     
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#post">
            Post
            </button>
        

            <div className="modal fade " id="post" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="post">Post a Roama</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body d-flex main-section">
                            <div className="profile-image">
                                <img src={''} alt="profile image" className="image-box"/>
                            </div>
                            <form className="flex-fill form-text">
                                <div className="mb-3 flex-fill">
                                    <label htmlFor="message-text" className="col-form-label"></label>
                                    <textarea className="form-control" id="message-text" placeholder='Type your Message here'></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer footer-btn">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary post-btn" onSubmit={''}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
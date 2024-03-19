import './messages.css'
import "../../../public/profile-pics/person_1.jpeg"

export default function Messages(){
    return(
    <>
            <div className="messages-container">
                <h2 className="message-title">Recent Messages</h2>
                <button className="btn-text-container">
                <div className="text-container">
                    <span className="active"></span>
                    <img className="message-profile" src="../../../public/profile-pics/person_1.jpeg"></img>
                        <div className="message-profile-info">
                            <p className="message-profile-username">Andrei Nergaoi </p>
                            <p className="message-profile-text">Sent you a message</p>
                        </div>
                </div>
                </button>
                <button className="btn-text-container">
                <div className="text-container">
                    <span className="active"></span>
                    <img className="message-profile" src="../../../public/profile-pics/person_2.jpeg"></img>
                        <div className="message-profile-info">
                            <p className="message-profile-username">Andrei Nergaoi </p>
                            <p className="message-profile-text">Liked your a message</p>
                        </div>
                </div>
                </button>
                <button className="btn-text-container">
                <div className="text-container">
                    <span className="active"></span>
                    <img className="message-profile" src="../../../public/profile-pics/person_3.jpeg"></img>
                        <div className="message-profile-info">
                            <p className="message-profile-username">Andrei Nergaoi </p>
                            <p className="message-profile-text">Seen Your Message</p>
                        </div>
                </div>
                </button>
            </div>
    </>
    )
}


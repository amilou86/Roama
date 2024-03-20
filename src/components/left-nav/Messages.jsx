import './messages.css'
import friends from '../utils/friends.json'

function Messages(){
    return(
    <>
                <div className="messages-container">
                <h2 className="message-title">Recent Messages</h2>
                <button className="btn-text-container">
                <div className="text-container">
                    <span className="active"></span>
                    <img className="message-profile" src={friends[1].profilePic}></img>
                        <div className="message-profile-info">
                            <p className="message-profile-username">{friends[1].friendName}</p>
                            <p className="message-profile-text">Sent you a message</p>
                        </div>
                </div>
                </button>
                <button className="btn-text-container">
                <div className="text-container">
                    <span className="active"></span>
                    <img className="message-profile" src={friends[0].profilePic}></img>
                        <div className="message-profile-info">
                            <p className="message-profile-username">{friends[0].friendName} </p>
                            <p className="message-profile-text">Liked your a message</p>
                        </div>
                </div>
                </button>
                <button className="btn-text-container">
                <div className="text-container">
                    <span className="active"></span>
                    <img className="message-profile" src={friends[2].profilePic}></img>
                        <div className="message-profile-info">
                            <p className="message-profile-username">{friends[2].friendName} </p>
                            <p className="message-profile-text">Seen Your Message</p>
                        </div>
                </div>
                </button>
            </div>
    </>
    )
}

export default Messages

import React from 'react';
import "./friendCards.css"

export default function FriendCards({ friendName, profilePic, online }) {
    // const { friendName, profilePic, online } = friend
    return (
        <div className="friend-card">
            <img src={profilePic} alt={friendName} />
            <h3>{friendName}</h3>
            <p>{online ? "online" : "offline"}</p>
        </div>
    )
}





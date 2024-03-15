import React from 'react';
import "./friendCards.css"
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { FaPlaneCircleXmark } from "react-icons/fa6";

export default function FriendCards({ friendName, profilePic, online }) {

    return (
        <div className="friend-card">
            <img src={profilePic} alt={friendName} />
            <h3>{friendName}</h3>
            <p>
                {online === "true" || online === true ? (
                    <FaPlaneCircleCheck />
                ) : (
                    <FaPlaneCircleXmark />
                )}
            </p>
        </div>
    )
}





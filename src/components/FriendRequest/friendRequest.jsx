import React, { useState } from 'react';
import requestsData from '../utils/requests.json';
import '../PostModal/style.css';

export default function FriendRequest() {
    const [searchTerm, setSearchTerm] = useState('');
    const [foundFriend, setFoundFriend] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [showRequestSent, setShowRequestSent] = useState(false);

    const handleSearch = () => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        const found = requestsData.find(friend => friend.friendName.toLowerCase().includes(lowercaseSearchTerm));
        setFoundFriend(found);
        setShowResult(true);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSendRequest = () => {
        if (foundFriend) {
            setShowRequestSent(true);
        } else {
            alert('No friend found with that name.');
        }
    };

    const handleCloseRequestSent = () => {
        setShowRequestSent(false);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setFoundFriend(null);
    };

    return (
        <div className="main-post-init">
            <button type="button" className="btn btn-primary init-post" data-bs-toggle="modal" data-bs-target="#post">
                add a roama
            </button>

            <div className="modal fade" id="post" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" id="search-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">
                                search for a roama:
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center main-section">
                            <form className="flex-fill form-text">
                                <div className="mb-3 flex-fill">
                                    <label htmlFor="message-text" className="col-form-label"></label>
                                    <textarea
                                        className="form-control input-area"
                                        id="message-text"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        placeholder="roama name"
                                    />
                                </div>
                            </form>
                            <button className="btn btn-primary" onClick={handleSearch}>
                                search
                            </button>
                            <button className="btn btn-secondary" onClick={handleClearSearch}>
                                clear
                            </button>
                        </div>
                        {foundFriend !== null && (
                            <div className="results">
                                {foundFriend ? (
                                    <div className="friend-results">
                                        <h2>{foundFriend.friendName}</h2>
                                        <button className="btn btn-primary" onClick={handleSendRequest}>
                                            request roama
                                        </button>
                                    </div>
                                ) : (
                                    <div className="no-results">
                                        <p>{searchTerm} is not a roama yet!</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {showRequestSent && (
                <div className="modal fade show" id="requestSentModal" tabIndex="-1" aria-labelledby="requestSentModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="requestSentModalLabel">roama requested</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseRequestSent}></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

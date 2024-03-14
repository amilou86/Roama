import { useState, useEffect } from 'react'
import FriendCards from '../FriendCards/friendCards.jsx'
import friendsData from '../utils/friends.json'

export default function FriendList() {
    const [posts, setPosts] = useState([]);
    // for fetching
    const [loading, setLoading] = useState(false);
    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // how many we want per page
    const [postsPerPage] = useState(3);

    useEffect(() => {
        setPosts(friendsData);
        console.log(posts)
        // setPostsPerPage(friendsData.length);
        setLoading(false);

    }, []);

    return (
        <div className='container'>
            <h2>Friends</h2>
            {
                friendsData.map((friend, index) => {
                    return <FriendCards key={index} friendName={friend.friendName} profilePic={friend.profilePic} online={friend.online} />
                })
            }
        </div>
    );
};



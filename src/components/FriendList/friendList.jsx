import { useState, useEffect } from 'react'
// import axios from 'axios';
import FriendCards from '../FriendCards/friendCards.jsx'
import friendsData from '../utils/friends.json'
import "../FriendCards/friendCards.css"
import Pagination from '../Pagination/Pagination.jsx';
// import Posts from '../Pagination/Posts.jsx';

export default function FriendList() {
    const [posts, setPosts] = useState([]);
    // for fetching
    const [loading, setLoading] = useState(false);
    // for pagination
    // const [currentPage, setCurrentPage] = useState(1);
    // how many we want per page
    // const postsPerPage = 3;

    useEffect(() => {
        setPosts(friendsData);
    }, []);


    return (
        <div className='container'>
            <h2>who's roaming?</h2>
            {
                friendsData.map((friend, index) => {
                    return <FriendCards key={index} friendName={friend.friendName} profilePic={friend.profilePic} online={friend.online} />
                })
            }
            {/* <Posts posts={currentPosts} loading={loading} />
            <Pagination postPerPage={postsPerPage} totalPosts={friendsData.length} paginate={paginate} /> */}
        </div>
    );
}



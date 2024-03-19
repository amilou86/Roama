import { useState } from 'react'
import FriendCards from '../FriendCards/friendCards.jsx'
import friendsData from '../utils/friends.json'
import "../FriendCards/friendCards.css"
import Pagination from '../Pagination/Pagination.jsx';

export default function FriendList() {

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = friendsData.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className='container'>
            <h2>who's roaming?</h2>
            {
                currentPosts.map((friend, index) => {
                    return <FriendCards key={index}
                        friendName={friend.friendName}
                        profilePic={friend.profilePic}
                        online={friend.online}
                    />
                })
            }
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={friendsData.length}
                paginate={paginate}
            />
        </div>
    );
}



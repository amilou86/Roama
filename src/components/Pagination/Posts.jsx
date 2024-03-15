import React from 'react';

export default function Posts({ posts, loading }) {
    // Component code for rendering posts
    if (loading) {
        return <h2>...loading</h2>;
    }

    return (
        <ul className="mb-4 p-5">
            {posts.map((post) => (
                <li
                    className="block text-gray-700 text-sm text-left p-2"
                    key={post.id}
                    id={post.id}
                >
                    <strong>Title:</strong> {post.title} | <strong>ID:</strong> {post.id}
                </li>
            ))}
        </ul>
    );
};




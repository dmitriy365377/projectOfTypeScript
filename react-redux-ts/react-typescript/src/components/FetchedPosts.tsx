import React from 'react';

interface ArrayOfNumbers {
    posts: []
}

export const FetchPosts: React.FC<ArrayOfNumbers> = ({ posts }) => {
    if (!posts.length) {
        return <button className="btn btn-primary">Загрузить</button>
    }
    return (
        <div>
            FetchPosts
        </div>
    )
}
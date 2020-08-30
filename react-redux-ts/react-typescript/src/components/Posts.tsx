import React from 'react';
import {useSelector} from 'react-redux';
import { Post } from './Post';
import {PostsState} from '../redux/postsReducer';

interface ArrayOfNumbers {
    posts: number[]
}
// 41:32
export const Posts: React.FC<ArrayOfNumbers> = ({ posts }) => {

    const posts = useSelector<PostsState, PostsState["posts"]>((state) => state.posts)

    return (<>
        {/* {posts.map(post => <Post key={post} post={post} />)} */}
    </>)
}

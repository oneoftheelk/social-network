import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {
    
    let PostsElement = props.postsData.map( item => {
        return <Post message={item.message} likeCount={item.likeCount} />
    })

    return (
        <div>
            <div className={style.addPost}>
                <div className={style.caption}>My Posts</div>
                <textarea placeholder="your news..."></textarea>
                <button>Add post</button>
            </div>
            <div>
                {PostsElement}
            </div>
        </div>
    );
}

export default MyPosts;
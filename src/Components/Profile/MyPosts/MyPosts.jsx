import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {
    let PostsElement = props.posts.map( item => {
        return <Post message={item.message} likeCount={item.likeCount} />
    })

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.currentTarget.value
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={style.addPost}>
                <div className={style.caption}>My Posts</div>
                <textarea
                    onChange={ onPostChange }
                    value={props.newPostCurrentText}
                    placeholder="your news..."/>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div>
                {PostsElement}
            </div>
        </div>
    );
}

export default MyPosts;
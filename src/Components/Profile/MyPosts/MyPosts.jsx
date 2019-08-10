import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import propTypes from 'prop-types';

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

// MyPosts.propTypes = {
//     postsData: propTypes.array.isRequired,
//     newPostCurrentText: propTypes.string.isRequired,
//     dispatch: propTypes.func.isRequired
// }

export default MyPosts;
import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profileReducer';
import propTypes from 'prop-types';

const MyPosts = (props) => {
    let PostsElement = props.postsData.map( item => {
        return <Post message={item.message} likeCount={item.likeCount} />
    })

    // 1.2 При нажатии на кнопку вызывается метод dispatch,
    // которому передаётся экшен с типом --> store.js
    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }

    // 1.2 При изменении текста в инпуте вызывается метод dispatch,
    // которому передаётся экшен с типом и новым текстом --> store.js
    let onPostChange = (event) => {
        let text = event.currentTarget.value
        props.dispatch( updateNewPostTextActionCreator(text) );
    }

    return (
        <div>
            <div className={style.addPost}>
                <div className={style.caption}>My Posts</div>
                <textarea
                    onChange={ onPostChange }
                    value={props.newPostCurrentText}
                    placeholder="your news..."/>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                {PostsElement}
            </div>
        </div>
    );
}

MyPosts.propTypes = {
    postsData: propTypes.array.isRequired,
    newPostCurrentText: propTypes.string.isRequired,
    dispatch: propTypes.func.isRequired
}

export default MyPosts;
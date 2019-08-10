import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profileReducer';
import propTypes from 'prop-types';
import MyPosts from './MyPosts'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostCurrentText: state.profilePage.newPostCurrentText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

// MyPosts.propTypes = {
//     postsData: propTypes.array.isRequired,
//     newPostCurrentText: propTypes.string.isRequired,
//     dispatch: propTypes.func.isRequired
// }

export default MyPostsContainer;
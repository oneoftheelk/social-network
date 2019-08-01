import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {
    let PostsElement = props.postsData.map( item => {
        return <Post message={item.message} likeCount={item.likeCount} />
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={style.addPost}>
                <div className={style.caption}>My Posts</div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
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

export default MyPosts;
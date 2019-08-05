const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT= "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostCurrentText,
                likeCount: 0
            };
            state.newPostCurrentText = "";
            state.posts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT: 
            state.newPostCurrentText = action.text;
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export default profileReducer;
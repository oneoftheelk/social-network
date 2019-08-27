const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT= "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "Hey, why everyone love Dimych?", likeCount: 15},
        {id: 2, message: "This is my first project!", likeCount: 23}
    ],
    newPostCurrentText: "",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostCurrentText, likeCount: 0};
            return {
                ...state,
                newPostCurrentText: "",
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostCurrentText: action.text};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;
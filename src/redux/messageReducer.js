const ADD_MESSAGE = "ADD-MESSAGE";

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messagesPath = state.messages;
            let newMessage = {
                id: messagesPath[messagesPath.length - 1].id + 1,
                message: `message${messagesPath[messagesPath.length - 1].id + 1}`,
                from: action.executor
            };
            state.messages.push(newMessage);
            return state;
        default: 
            return state;
    }
}

export const addMessageActionCreator = (executor) => ({type: ADD_MESSAGE, executor: executor});

export default messageReducer;
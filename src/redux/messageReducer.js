const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: "message1", from: "me"},
        {id: 2, message: "message2", from: "friend"},
        {id: 3, message: "message3", from: "me"}
    ],
    dialogs: [
        {id: 1, name: "Dmitry"},
        {id: 2, name: "Jane"},
        {id: 3, name: "Mary"},
        {id: 4, name: "Ian"},
        {id: 5, name: "Alice"}
    ],
};

const messageReducer = (state = initialState, action) => {
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
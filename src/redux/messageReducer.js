const ADD_MESSAGE = "ADD-MESSAGE";

// 1.4 Принимает нужную часть стейта и экшен.
// Если тип экшена совпадает, изменяет стейт и возвращает его.
// Иначе возвращает неизменённый стейт.
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

// 1.1 Создаётся action creator, возвращающий объект с типом и исполнителем (executor) --> DialogsPage
export const addMessageActionCreator = (executor) => ({type: ADD_MESSAGE, executor: executor});

export default messageReducer;
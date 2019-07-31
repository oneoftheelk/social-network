let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hey, why everyone love Dimych?", likeCount: 15},
            {id: 2, message: "This is my first project!", likeCount: 23}
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "message1"},
            {id: 2, message: "message2"},
            {id: 3, message: "message3"}
        ],
        dialogs: [
            {id: 1, name: "Dmitry"},
            {id: 2, name: "Jane"},
            {id: 3, name: "Mary"},
            {id: 4, name: "Ian"},
            {id: 5, name: "Alice"}
        ],
    },
    navbar: {
        friends: [
            {id: 1, name: "Dmitry"},
            {id: 2, name: "Jane"},
            {id: 3, name: "Mary"},
            {id: 4, name: "Ian"},
            {id: 5, name: "Alice"}
        ]
    }
}

export default state;
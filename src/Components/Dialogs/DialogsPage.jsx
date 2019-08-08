import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';
import style from './DialogsPage.module.css';
import { addMessageActionCreator } from './../../redux/messageReducer';
import propTypes from 'prop-types';

const DialogsPage = (props) => {
    // Методом map на основании массива диалогов создаёт новый массив с компонентами DialogsItem.
    let dialogsElement = props.dialogsPage.dialogs.map(item => {
        return <DialogsItem name={item.name} id={item.id} />
    });

    // Методом map на основании массива сообщений создаёт новый массив с компонентами MessagesItem.
    let messagesElement = props.dialogsPage.messages.map(item => {
        return <MessagesItem message={item.message} from={item.from} />
    })

    // 1.2 При нажатии на кнопку вызывается метод dispatch,
    // которому передаётся экшен с типом и исполнителем ("me" или "friend") --> store.js
    let addMessage = (executor) => {
        props.dispatch( addMessageActionCreator(executor) );
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.dialogsMessage}>
                <button onClick={ () => addMessage("me") }>Message from me</button>
                <button onClick={ () => addMessage("friend") }>Message from friend</button>
                {messagesElement}
            </div>
        </div>
    );
}

DialogsPage.propTypes = {
    dialogsPage: propTypes.object.isRequired,
    dispatch: propTypes.func.isRequired
}

export default DialogsPage;
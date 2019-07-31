import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';
import style from './DialogsPage.module.css';

const DialogsPage = (props) => {
    let dialogsElement = props.state.dialogs.map( item => {
        return <DialogsItem name={item.name} id={item.id} />
    });

    let messagesElement = props.state.messages.map( item => {
        return <MessagesItem message={item.message} />
    })

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.dialogsMessage}>
                {messagesElement}
            </div>
        </div>
    );
}

export default DialogsPage;
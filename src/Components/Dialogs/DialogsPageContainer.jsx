import React from 'react';
import { addMessageActionCreator } from './../../redux/messageReducer';
import propTypes from 'prop-types';
import DialogsPage from './DialogsPage';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (executor) => {
            let action = addMessageActionCreator(executor);
            dispatch(action);
        }
    }
}

const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps) (DialogsPage);

// DialogsPageContainer.propTypes = {
//     dialogsPage: propTypes.object.isRequired,
//     dispatch: propTypes.func.isRequired
// }

export default DialogsPageContainer;
import { addMessageActionCreator } from './../../redux/messageReducer';
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
            dispatch(addMessageActionCreator(executor));
        }
    }
}

const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps) (DialogsPage);

export default DialogsPageContainer;
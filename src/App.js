import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import ProfilePage from './Components/Profile/ProfilePage';
import DialogsPage from './Components/Dialogs/DialogsPage';
import propTypes from 'prop-types';

const App = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <Nav nav={props.state.navbar} />
            <div className="pagesWrapper">
                <Route path="/profile"
                    render={() => <ProfilePage
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch} />} />
                <Route path="/dialogs"
                    render={() => <DialogsPage
                        dialogsPage={props.state.dialogsPage}
                        dispatch={props.dispatch} />} />
            </div>
        </div>
    );
}

App.propTypes = {
    state: propTypes.object.isRequired,
    dispatch: propTypes.func.isRequired
};

export default App;
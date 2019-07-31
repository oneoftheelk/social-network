import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import ProfilePage from './Components/Profile/ProfilePage';
import DialogsPage from './Components/Dialogs/DialogsPage';

const App = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <Nav state={props.state.navbar} />
            <div className="pagesWrapper">
                <Route path="/profile" render={() => <ProfilePage state={props.state.profilePage} />} />
                <Route path="/dialogs" render={() => <DialogsPage state={props.state.dialogsPage} />} />
            </div>
        </div>
    );
}

export default App;
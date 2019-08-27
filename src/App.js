import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavContainer from './Components/Navbar/NavContainer';
import UsersContainer from './Components/Users/UsersContainer';
import DialogsPageContainer from './Components/Dialogs/DialogsPageContainer';
import ProfileContainer from './Components/Profile/ProfilePageContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

const App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <NavContainer />
            <div className="pagesWrapper">
                <Route path="/profile/:userID?"
                    render={() => <ProfileContainer />} />
                <Route path="/dialogs"
                    render={() => <DialogsPageContainer />} />
                <Route path="/users"
                    render={() => <UsersContainer />} />
            </div>
        </div>
    );
}

export default App;
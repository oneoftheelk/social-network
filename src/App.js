import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import NavContainer from './Components/Navbar/NavContainer';
import ProfilePage from './Components/Profile/ProfilePage';
import DialogsPageContainer from './Components/Dialogs/DialogsPageContainer';
import propTypes from 'prop-types';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <NavContainer />
            <div className="pagesWrapper">
                <Route path="/profile"
                    render={() => <ProfilePage />} />
                <Route path="/dialogs"
                    render={() => <DialogsPageContainer />} />
            </div>
        </div>
    );
}

App.propTypes = {
    state: propTypes.object.isRequired,
    dispatch: propTypes.func.isRequired
};

export default App;
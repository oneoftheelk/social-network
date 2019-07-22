import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ProfilePage from './Components/ProfilePage';
import DialogsPage from './Components/DialogsPage';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Nav />
            <ProfilePage />
            {/* <DialogsPage /> */}
        </div>
    );
}

export default App;
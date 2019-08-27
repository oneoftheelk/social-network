import React from 'react';
import ProfilePage from './ProfilePage';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from './../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID || 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <ProfilePage {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));
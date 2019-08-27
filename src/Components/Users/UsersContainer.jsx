import React from 'react';
import { connect } from 'react-redux';
import { addToFriends, removeFromFriends, setUsers,
    setCurrentPage, setTotalUsersCount, setIsFetching } from './../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import { Preloader } from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <> 
            {this.props.isFetching
                ? <Preloader />
                : <Users {...this.props} onPageChange={this.onPageChange} /> }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {addToFriends, removeFromFriends, setUsers,
    setCurrentPage, setTotalUsersCount, setIsFetching}) (UsersContainer);
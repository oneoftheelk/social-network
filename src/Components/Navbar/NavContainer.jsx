import React from 'react';
import propTypes from 'prop-types';
import Nav from './Nav';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps) (Nav);

// NavContainer.propTypes = {
//     nav: propTypes.object.isRequired
// }

export default NavContainer;
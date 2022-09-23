import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonSidebar = ({ innerText, pathName, active, iconName }) => {
    return (
        <Link className={`itemSidebar ${active ? "active" : ""}`} to={pathName}>
            <i className={iconName}></i>
            <span>{innerText} </span>

        </Link>
    );
};

ButtonSidebar.propTypes = {

};

export default ButtonSidebar;
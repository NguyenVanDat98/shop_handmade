import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonSidebar = ({innerText,pathName,active}) => {
    return (
        <Link className={`itemSidebar ${active? "active":""}`} to={pathName}>
            {innerText}
        </Link>
    );
};

ButtonSidebar.propTypes = {
    
};

export default ButtonSidebar;
import React from 'react';

import { Link } from 'react-router-dom';

Text.propTypes = {

};

function Text(props) {
    return (
        <div className='text'>
            <Link to="/login">
                <h4>Log In</h4>
            </Link>
            <Link to="/signup">
                <h4>Sign Up</h4>
            </Link>
        </div>
    );
}

export default Text;
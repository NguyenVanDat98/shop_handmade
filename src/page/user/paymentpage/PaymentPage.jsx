import React from 'react';
import PropTypes from 'prop-types';
import Pageroot from '../pageroot/Pageroot';
import { AccountUser, SearchUser } from '../../../components';

PaymentPage.propTypes = {

};

function PaymentPage(props) {
    return (
        <div>
            <Pageroot search={<SearchUser />} account={<AccountUser />}>

            </Pageroot>
        </div>
    );
}

export default PaymentPage;
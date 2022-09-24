import React from 'react';
import Pageroot from '../pageroot/Pageroot';
import { AccountUser, CartUser, SearchUser } from '../../../components';

CartPage.propTypes = {

};

function CartPage(props) {
    return (
        <div>
            <Pageroot search={<SearchUser />} account={<AccountUser />}>
                <CartUser />
            </Pageroot>
        </div>
    );
}

export default CartPage;
import React from 'react';
import { AccountUser, DetailProduct, SearchUser } from '../../../components';
import Pageroot from '../pageroot/Pageroot';

function DetailPage(props) {

    return (
        <div>
            <Pageroot search={<SearchUser />} account={<AccountUser />}>
                <DetailProduct />
            </Pageroot>
        </div>
    );
}

export default DetailPage;
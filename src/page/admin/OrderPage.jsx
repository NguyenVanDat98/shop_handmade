import React from 'react';
import RootPage from './RootPage';
import {SearchAd} from './../../components/';


const OrderPage = props => {
    return (
        <div>
            <RootPage search={<SearchAd/>}>
                
            </RootPage>
        </div>
    );
};



export default OrderPage;
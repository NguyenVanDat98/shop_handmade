import React from 'react';
import { SearchAd } from '../../components/';
import RootPage from './RootPage';
import { useParams } from 'react-router-dom';

const DiscountPage = props => {
    let param = useParams()
    console.log(param);
    return (
        <div>
            <RootPage search={<SearchAd />}>

            </RootPage>
        </div>
    );
};



export default DiscountPage;
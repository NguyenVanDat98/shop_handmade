import React from 'react';
import {ListProductAd, SearchAd} from '../../components/';

import RootPage from './RootPage';

const ProductPage = props => {
    return (
        <div>
            <RootPage search={<SearchAd/>}>
                <ListProductAd/>
            </RootPage>
        </div>
    );
};



export default ProductPage;
import React from 'react';
import {SearchAd} from '../../components/index.js';

import RootPage from './RootPage';

const ProductPage = props => {
    return (
        <div>
            <RootPage search={<SearchAd/>}></RootPage>
        </div>
    );
};



export default ProductPage;
import React from 'react';
import {SearchAd,ListUser} from '../../components/index.js';
import RootPage from './RootPage';

const UserPage = props => {
    return (
        <div >
            <RootPage search={<SearchAd/>}>
                <ListUser/>
            </RootPage>
        </div>
    );
};



export default UserPage;
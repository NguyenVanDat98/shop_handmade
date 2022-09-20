import React from 'react';
import ListUser from '../components/admin/ListUser';
import SearchAd from '../components/admin/SearchAd';
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
import React from 'react';
import { AccountUser, ProfileUser } from '../../../components';
import Pageroot from '../pageroot/Pageroot';

function ProfilePage(props) {
    return (
        <div>
            <Pageroot account={<AccountUser />}>
                <ProfileUser />
            </Pageroot>
        </div>
    );
}

export default ProfilePage;

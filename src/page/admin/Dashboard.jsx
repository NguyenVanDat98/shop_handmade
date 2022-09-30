import React from 'react';
import {MainDashboard} from '../../components/';
import RootPage from './RootPage';

const Dashboard = props => {
    return (
        <div>
            <RootPage>
                <MainDashboard/>
            </RootPage>
        </div>
    );
};


export default Dashboard;
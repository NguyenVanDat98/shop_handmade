import React from 'react';
import MainDashboard from '../../components/admin/MainDashboard';
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
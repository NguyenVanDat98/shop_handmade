import React from 'react';
import PieChartRanger from '../Chart/PieChartRanger';
import {ItemView,ChartBar,PieChart} from './../../components/';

const MainDashboard = props => {
    const itemView= ["Order","User","Earning"]
    return (
        <div className='main-dashboard'>
            <div className='d-flex flex-lg-column justify-content-around flex mt-3 mb-3 '>
                 {[...new Array(3)].map((a,i)=><ItemView total={i} key={i}>{itemView[i]} </ItemView>)}

            </div>
            <div className='chart-body d-flex flex-column w-100'>
                    <ChartBar/>
                    <div className='main-pie'>
                        <PieChart/>   
                        <PieChartRanger/>
                    </div>

            </div>
           
        </div>
    );
};

export default MainDashboard;
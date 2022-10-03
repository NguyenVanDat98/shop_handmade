import React from 'react';
import {ItemView,ChartBar,PieChart} from './../../components/';

const MainDashboard = props => {
    const itemView= ["Order","User","Earning"]
    return (
        <div className='main-dashboard viewFirst'>
            <div className='d-flex justify-content-around mt-3 mb-3 '>
                 {[...new Array(3)].map((a,i)=><ItemView total={i} key={i}>{itemView[i]} </ItemView>)}

            </div>
            <div className='chart-body d-grid w-100'>
                    <ChartBar/>
                    <PieChart/>     
            </div>
           
        </div>
    );
};

export default MainDashboard;
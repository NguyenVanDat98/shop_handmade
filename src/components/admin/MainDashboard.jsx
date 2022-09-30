import React from 'react';
import {ItemView} from './../../components/index.js';




const MainDashboard = props => {
    const itemView= ["Order","User","Earning"]
    return (
        <div className='main-dashboard'>
            <div className='d-flex justify-content-around mt-5 mb-5 '>
                 {[...new Array(3)].map((a,i)=><ItemView total={i} key={i}>{itemView[i]} </ItemView>)}

            </div>
            <div className='chart-body'>
                           
            </div>
           
        </div>
    );
};

export default MainDashboard;
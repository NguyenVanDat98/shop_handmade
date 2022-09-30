import React from 'react';

import {ItemUser} from './../index.js';


const ListUser = props => {
    return (
        <div className='listUser'>
            <div className='listUser-header'>
             <p>No.</p>
                <p>Name</p>
                <p>Telephone</p>
                <p>Description</p>
                <p>Money</p>
                <p> </p>
                <p></p>   
            </div>
                
            
            <div className='body-listUser' >
                 {[...new Array(30)].map((_,i)=><ItemUser No={i+1}/>)   }
            </div>

        </div>
    );
};



export default ListUser;
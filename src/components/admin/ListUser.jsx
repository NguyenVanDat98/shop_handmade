import React from 'react';

import ItemUser from './ItemUser';


const ListUser = props => {
    return (
        <table className='listUser'>
            <thead>
             <th>No.</th>
                <th>Name</th>
                <th>Telephone</th>
                <th>Description</th>
                <th>Money</th>
                <th> </th>
                <th></th>   
            </thead>
                
            
            <tbody>
                <ItemUser/>
            </tbody>

        </table>
    );
};



export default ListUser;
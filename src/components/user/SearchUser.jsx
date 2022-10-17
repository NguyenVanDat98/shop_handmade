import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICONSEARCH } from '../../Icon';
function SearchUser(props) {


const [value,setValue]=useState("")
    const navi =useNavigate()
const func= (event) =>{
    if(event.keyCode == 13){
        navi({
            pathname: '/search',
            search: `&name_like=${value}`,
          })
        
    }
}
    return (
        <div className='search-header'>
            <input type="text" className="form-control"onKeyDown={func} onChange={(e)=>{setValue(e.target.value)}} placeholder="Search..."></input>
            <span className="ICONSEARCH">
                <i className={ICONSEARCH} ></i>
            </span>
        </div>
    );
}

export default SearchUser;
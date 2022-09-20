import React from 'react';
import ButtonSidebar from './ButtonSidebar';

const SidebarAd =({})=> {
  
    return (
        <div className='sidebarAd'>
            <ButtonSidebar innerText='Dashboard' pathName='/admin/'/>
            <ButtonSidebar innerText='User' pathName='/admin/users'/>
            <ButtonSidebar innerText='Product' pathName='/admin/Product'/>
            <ButtonSidebar innerText='Order' pathName='/admin/Order'/>
            <ButtonSidebar innerText='Voucher' pathName='/admin/Voucher'/>
            <ButtonSidebar innerText='Discount' pathName='/admin/Discount'/>
        </div>
    );
};



export default SidebarAd;
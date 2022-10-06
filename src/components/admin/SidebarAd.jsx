import React from "react";
import {
    ICONBAG,
    ICONCHART,
    ICONDISCOUNT,
    ICONORDER,
    ICONSETTNG,
    ICONUSER,
    ICONVOUCHER,
} from "../../Icon";
import ButtonSidebar from "./ButtonSidebar";

const SidebarAd = (props) => {  
    const url = window.location.href
    const page={
        page1: url.includes("/Dashboard"),
        page2: url.includes("/users"),
        page3: url.includes("/Product"),
        page4: url.includes("/Order"),
        page5: url.includes("/Voucher"),
        page6: url.includes("/Discount"),
        page7: url.includes("/profile"),
    }
    
    return (
        <div className="sidebarAd">
            <ButtonSidebar
                iconName={ICONCHART}
                active={page.page1}
                innerText="Dashboard"
                pathName="/admin/Dashboard"
            />
            <ButtonSidebar
                iconName={ICONUSER}
                active={page.page2}
                innerText="User"
                pathName="/admin/users"
            />
            <ButtonSidebar
                iconName={ICONBAG}
                active={page.page3}
                innerText="Product"
                pathName="/admin/Product"
            />
            <ButtonSidebar
                iconName={ICONORDER}
                active={page.page4}
                innerText="Order"
                pathName="/admin/Order"
            />
            <ButtonSidebar
                iconName={ICONVOUCHER}
                active={page.page5}
                innerText="Voucher"
                pathName="/admin/Voucher"
            />
            <ButtonSidebar
                iconName={ICONDISCOUNT}
                active={page.page6}
                innerText="Discount"
                pathName="/admin/Discount"
            />
            <ButtonSidebar
                iconName={ICONSETTNG}
                active={page.page7}
                innerText="Profile"
                pathName="/admin/profile"
            />
        </div>
    );
};

export default SidebarAd;

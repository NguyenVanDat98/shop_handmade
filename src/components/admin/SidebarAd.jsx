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
        page1: url.includes("/dashboard"),
        page2: url.includes("/users"),
        page3: url.includes("/product"),
        page4: url.includes("/order"),
        page5: url.includes("/voucher"),
        page6: url.includes("/discount"),
        page7: url.includes("/profile"),
    }
    
    return (
        <div className="sidebarAd">
            <ButtonSidebar
                iconName={ICONCHART}
                active={page.page1}
                innerText="Dashboard"
                pathName="/admin/dashboard"
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
                pathName="/admin/product"
            />
            <ButtonSidebar
                iconName={ICONORDER}
                active={page.page4}
                innerText="Order"
                pathName="/admin/order"
            />
            <ButtonSidebar
                iconName={ICONVOUCHER}
                active={page.page5}
                innerText="Voucher"
                pathName="/admin/voucher"
            />
            <ButtonSidebar
                iconName={ICONDISCOUNT}
                active={page.page6}
                innerText="Discount"
                pathName="/admin/discount"
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

import React from "react";
import {
    ICONCART,
    ICONHOME,
    ICONMAIL,
} from "../../Icon";
import ButtonSidebar from "../admin/ButtonSidebar";

const SideBar = (props) => {
    const url = window.location.href
    const page = {
        page1: url.includes("/Dashboard"),
        page2: url.includes("/users"),
        page3: url.includes("/Product"),
        page4: url.includes("/Order"),
        page5: url.includes("/Voucher"),
        page6: url.includes("/Discount"),
    }

    return (
        <div className="sidebarAd sidebar-user">
            <ButtonSidebar
                iconName={ICONHOME}
                active={page.page1}
                innerText="Home"
                pathName="/"
            />
            <ButtonSidebar
                iconName={ICONCART}
                active={page.page2}
                innerText="Cart"
                pathName="/cart"
            />
            <ButtonSidebar
                iconName={ICONMAIL}
                active={page.page3}
                innerText="Mail"
                pathName=""
            />
        </div>
    );
};

export default SideBar;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    ICONBACK,
    ICONCART,
    ICONHOME,
    ICONUSER,
} from "../../Icon";
import ButtonSidebar from "../admin/ButtonSidebar";


const SideBar = (props) => {
    const navi = useNavigate()
    const Url = useLocation().pathname

    const page = {
        page1: Url === "/",
        page2: Url === "/cart",
        page3: Url === "",
    }
    const checkAccount = () => {
        const locale = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : null;
        if (locale !== null) {
            navi("/profileuser");
        } else {
            navi("/login");
        }
    }
    return (
        <div className="sidebarAd sidebar-user">
            {!page.page1 && <button onClick={() => navi(-1)}><i className={ICONBACK} ></i></button>}
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
                pathName={"/cart"}
            />
            <ButtonSidebar
                iconName={ICONUSER}
                active={page.page4}
                innerText="Profile"
                pathName="/login"
            />
        </div>
    );
};

export default SideBar;


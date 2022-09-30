import React from "react";
import { useState, useEffect } from "react";
import {
    ICONBAG,
    ICONCHART,
    ICONDISCOUNT,
    ICONORDER,
    ICONUSER,
    ICONVOUCHER,
} from "../../Icon";
import ButtonSidebar from "./ButtonSidebar";

const SidebarAd = (props) => {
    const [page, setPage] = useState({
        page1: false,
        page2: false,
        page3: false,
        page4: false,
        page5: false,
        page6: false,
    });
    useEffect(() => {
        switch (window.location.href) {
            case "http://localhost:3000/admin/Discount":
                setPage({ ...page, page6: true });
                break;
            case "http://localhost:3000/admin/Dashboard":
                setPage({ ...page, page1: true });
                break;
            case "http://localhost:3000/admin/users":
                setPage({ ...page, page2: true });
                break;
            case "http://localhost:3000/admin/Product":
                setPage({ ...page, page3: true });
                break;
            case "http://localhost:3000/admin/Order":
                setPage({ ...page, page4: true });
                break;
            case "http://localhost:3000/admin/Voucher":
                setPage({ ...page, page5: true });
                break;

            default:
                break;
        }
    }, [page]);
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
        </div>
    );
};

export default SidebarAd;

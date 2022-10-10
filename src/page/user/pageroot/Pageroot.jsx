import React from 'react';
import { useEffect, useCallback } from 'react';
import { getAccount } from '../../../api/apiMethod.js';
import { useState } from 'react';
import { useMemo } from 'react';
import { Header, BodyUser, FooterUser, AccountUser, Text } from "../../../components/index.js"

const Pageroot = ({ search, children, account, cart }) => {
    const [data, setData] = useState([])
    const [check, setCheck] = useState(false)
    const infoUser = useMemo(() => {
        return JSON.parse(localStorage.getItem("infoAccount"))
    }, [])

    const fetAccount = useCallback(() => {
        if (infoUser !== null) {
            getAccount(`?id=${infoUser.id}`)
                .then(res => res.status === 200 && res.json())
                .then(res => setData(res[0]))
        }
    }, [infoUser])
    useEffect(() => {
        fetAccount()
    }, [fetAccount])
    useEffect(() => {
        if (data.length !== 0) {
            if (data.id === infoUser.id) {
                setCheck(true)
            } else {
                setCheck(false)
            }
        }
    }, [data])
    return (
        <div>
            <Header search={search} cart={cart}>{check ? <AccountUser namee={infoUser.userName} /> : <Text />} </Header>
            <BodyUser>
                {children}
            </BodyUser>

            <FooterUser />
        </div>

    );
};




export default Pageroot;
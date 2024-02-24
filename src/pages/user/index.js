import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RootLayout from "@/app/layout";
import UserDetails from "../../../components/user/userDetailsComponent";

function User() {
    const userData = useSelector(state => state.userData);
    return (
        <>
            <RootLayout>
                <UserDetails userData={userData} />
            </RootLayout>
        </>
    );
}

export default User;

import React from 'react';
import { useSelector } from 'react-redux';
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

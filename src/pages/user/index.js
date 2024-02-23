import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RootLayout from "@/app/layout";
import UserDetails from "../../../components/user/userDetailsComponent";
import { getUser } from '@/services/apiService';
import { setUserData } from '@/redux/actions';
import cookie from 'js-cookie'; // Import the js-cookie library

function User() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);

    useEffect(() => {
        const email = cookie.get('email');
        if (email) {
            getUser(email)
                .then(userData => {
                    dispatch(setUserData(userData));
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                    dispatch(setUserData(null));
                });
        }
    }, [dispatch]);

    return (
        <>
            <RootLayout>
                <UserDetails userData={userData} />
            </RootLayout>
        </>
    );
}

export default User;

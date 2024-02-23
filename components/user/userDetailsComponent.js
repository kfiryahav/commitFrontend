import React from 'react';

const UserDetails = ({ userData }) => {
    return (
        <>
            {userData && (
                <div className='mt-4'>
                    <h5>Email: {userData.email}</h5>
                    <h5>Phone: {userData.phone}</h5>
                </div>
            )}
        </>
    );
};

export default UserDetails;

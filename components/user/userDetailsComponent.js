import React from 'react';

const UserDetails = ({ userData }) => {
    return (
        <>
          {userData && (userData.email || userData.phone) ? (
                <div className='mt-4'>
                    {userData.email && <h5>Email: {userData.email}</h5>}
                    {userData.phone && <h5>Phone: {userData.phone}</h5>}
                </div>
            ) : (
                <h5>{userData}</h5>
            )}
        </>
    );
};

export default UserDetails;

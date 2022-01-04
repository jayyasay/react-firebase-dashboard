import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSession } from '../firebase/userProvider';

const ProfileRedirect = ( { children } ) => {
    const { user } = useSession();

    return !user ? children : <Navigate to={`/profile/${user.uid}`} />
};
    

export default ProfileRedirect;
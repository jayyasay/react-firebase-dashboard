import React from 'react';
import { Navigate, useParams  } from 'react-router-dom';
import { useSession } from '../firebase/userProvider';

const PrivateRoute = ( { children } ) => {
    const { user } = useSession();

    let params = useParams();

    if (!user.uid === params.id) {
        return children
    }
    else {
        return <Navigate to={`/profile/${user.uid}`} />
    }
    // return !user ? children : <Navigate to={`/profile/${user.uid}`} />
};
    

export default PrivateRoute;
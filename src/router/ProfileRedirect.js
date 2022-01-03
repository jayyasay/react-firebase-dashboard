import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSession } from '../firebase/userProvider';

const ProfileRedirect = ( {component: Component, ...props} ) => {
    const { user } = useSession();

    return !user ? <Component {...props} /> : <Navigate to={`/profile/${user.uid}`} />;

    // return (
    //     <Route {...rest } render={(props) => !user ? (<Component { ... props } />)
    //     :
    //     (
    //     <Navigate to={{
    //         pathname: `/profile/${user.uid}`,
    //         state: { from: props.location },
    //      }} replace />
    //     )
    //     }
    //     />
    // );
};
    

export default ProfileRedirect;
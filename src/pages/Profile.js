import React, { useEffect, useState } from 'react';

import { useSession } from '../firebase/userProvider';
import { firestore } from '../firebase/config';

const Profile = () => {
    const { user } = useSession();
    const [userDocument, setUserDocument] = useState(null);

    useEffect(() => {
        const docRef = firestore.collection('users').doc(user.uid);
        // Not real-time
        // docRef.get().then((document) => {
        //     if (document.exists) {
        //         setUserDocument(document.data());
        //     }
        // })

        //Real time
        const unsubscribe = docRef.onSnapshot((doc) => {
            const documentData = doc.data();
            setUserDocument(documentData)
        })
        return unsubscribe;
    }, [user.uid]);

    if (!userDocument) {
        return null;
    };

    return (
        <div>
            <p>{JSON.stringify(userDocument)}</p>
        </div>
    )
}

export default Profile
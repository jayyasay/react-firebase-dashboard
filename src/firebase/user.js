import { firestore } from './config'

export const createUserDocument = async (user) => {
    // get reference to the Firestore document
    const docRef = firestore.doc(`/users/${user.uid}`);

    // create the user object
    const userProfile = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        specialty: '',
        ip: '',
    };

    // write to Cloud Firestore
    return docRef.set(userProfile);
}
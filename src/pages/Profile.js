import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSession } from '../firebase/userProvider';
import { firestore } from '../firebase/config';

const Profile = () => {
    const { user } = useSession();
    const params = useParams();
    const { register, setValue } = useForm();
    const [userDocument, setUserDocument] = useState(null);

    useEffect(() => {
        const docRef = firestore.collection('users').doc(params.id);
        // Not real-time
        // docRef.get().then((document) => {
        //     if (document.exists) {
        //         setUserDocument(document.data());
        //     }
        // })

        //Real time
        const unsubscribe = docRef.onSnapshot((doc) => {
            if (doc.exists) {
                const documentData = doc.data();
                setUserDocument(documentData);
                const formData = Object.entries(documentData).map((entry) => ({
                    [entry[0]]: entry[1],
                }));
                setValue(formData);
            }
        });
        return unsubscribe;
    }, [user.id, setValue]);

    if (!userDocument) {
        return null;
    };

    return (
        <div
  className="add-form-container"
  style={{ maxWidth: 960, margin: '50px auto' }}
>
  <form className="ui big form">
    <div className="fields">
      <div className="eight wide field">
        <label>
          Name
          <input type="text" {...register('name', { required: true })} />
        </label>
      </div>
      <div className="eight wide field">
        <label>
          Email
          <input type="text" disabled {...register('email', { required: true })} />
        </label>
      </div>
    </div>
    <div className="fields">
      <div className="six wide field">
        <label>
          Address
          <input type="text" {...register('address', { required: true })} />
        </label>
      </div>
      <div className="five wide field">
        <label>
          City
          <input type="text" {...register('city', { required: true })} />
        </label>
      </div>
      <div className="two wide field">
        <label>
          State
          <input type="text" {...register('state', { required: true })} />
        </label>
      </div>
      <div className="three wide field">
        <label>
          Zip
          <input type="text" {...register('zip', { required: true })} />
        </label>
      </div>
    </div>
    <div className="equal width fields">
      <div className="field">
        <label>
          Phone
          <input type="text" {...register('phone', { required: true })} />
        </label>
      </div>
      <div className="field">
        <label>
          Specialty
          <select className="specialty" {...register('specialty', { required: true })}>
            <option value="field agent">Field Agent</option>
            <option value="covert operations">Covert Operations</option>
            <option value="intelligence officer">Intelligence Officer</option>
          </select>
        </label>
      </div>
      <div className="field">
        <label>
          ip
          <input type="text" name="ip" />
        </label>
      </div>
    </div>
    <button type="submit" className="ui submit large grey button right floated">
      Submit
    </button>
  </form>
</div>

    )
}

export default Profile
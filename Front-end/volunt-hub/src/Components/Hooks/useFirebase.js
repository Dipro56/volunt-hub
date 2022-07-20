import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from '../../firebase.init';

const googleProvider = new GoogleAuthProvider();

export const useFirebase = () => {
  const [user, setUser] = useState([]);

  const signInWithGoogle = () => {
    console.log('google sign in');
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithFacebook = () => {
    console.log('sign in with facebook');
  };

  return {
    user,
    signInWithGoogle,
    signInWithFacebook,
  };
};

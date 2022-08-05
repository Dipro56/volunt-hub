import React from 'react';
import AdminNavbar from '../../SideBar/AdminNavbar';
// import { getFirestore } from 'firebase/firestore/lite';
// import app from '../../../firebase.init';
// import { useState } from 'react';

// const db = getFirestore(app);

export const ParticipantList = () => {
  // const [userList, setUserList] = useState([]);

  // window.addEventListener('load', () => {
  //   Fetchdata();
  // });

  // const Fetchdata = () => {
  //   db.collection('Users')
  //     .get()
  //     .then((querySnapshot) => {
  //       // Loop through the data and store
  //       // it in array to display
  //       querySnapshot.forEach((element) => {
  //         var data = element.data();
  //         setUserList((arr) => [...arr, data]);
  //       });
  //     });
  // };

  return (
    <div>
      <AdminNavbar />
      <h1>Participant list </h1>
    </div>
  );
};

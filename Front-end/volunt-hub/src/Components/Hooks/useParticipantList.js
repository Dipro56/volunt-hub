import axios from 'axios';
import { useState, useEffect } from 'react';

export const useParticipantList = () => {
  const [participantList, setParticipantList] = useState([]);

  const URL = 'http://localhost:5000/Participant';

  useEffect(() => {
    axios.get(URL).then((res) => {
      setParticipantList(res.data);
    });
  }, []);

  return {
    participantList,
  };
};

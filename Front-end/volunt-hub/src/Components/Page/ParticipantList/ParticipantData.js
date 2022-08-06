import axios from 'axios';
import React from 'react';
import DataTable from 'react-data-table-component';
import { useParticipantList } from '../../Hooks/useParticipantList';

export const ParticipantTable = () => {
  const columns = [
    {
      name: 'Event name',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Participant name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Mobile No',
      selector: (row) => row.mobileNo,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <button
          className="btn btn-sm btn-danger fs-6"
          // onClick={() => console.log(row._id)}
          onClick={() => {
            const URL = `http://localhost:5000/DeleteParticipant`;
            const id = row._id;
            // const _id = { id };

            // console.log(_id);

            axios
              .post(URL, { id })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  const { participantList } = useParticipantList();

  console.log(participantList);

  return (
    <div className="container">
      <DataTable columns={columns} data={participantList} />
    </div>
  );
};

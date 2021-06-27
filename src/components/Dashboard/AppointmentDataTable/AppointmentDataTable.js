import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';

const AppointmentDataTable = ({appointments}) => {
    const deleteBook = (id) => {
        fetch(`http://localhost:5000/deleteBook/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result) {
              console.log(result);
            }
          });
      };
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr. No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Gender</th>
                <th className="text-secondary" scope="col">Age</th>
                <th className="text-secondary" scope="col">Weight</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Address</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr key={appointment._id}>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.gender}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.weight}KG</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.address}</td>
                        <td><button 
                        onClick={()=> deleteBook(appointment._id)}
                        className="btn btn-brand"
                        ><FontAwesomeIcon icon={faTrashAlt} /> </button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentDataTable;
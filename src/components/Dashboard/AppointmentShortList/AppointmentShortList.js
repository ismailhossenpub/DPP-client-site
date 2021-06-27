import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
       <div className="table-style booking-card p-2">
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td><button className="btn btn-brand">Not visited</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
       </div>
    );
};

export default AppointmentShortList;
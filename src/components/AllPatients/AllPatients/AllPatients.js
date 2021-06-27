import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import "./AllPatients.css";

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [appointments])

    return (
        <section className="containerStyle">
            <div className="container-fluid row">
            <div className="col-md-3" >
            <Sidebar></Sidebar>
            </div>

            <div className="col-md-9 p-4 pr-5" >
                <div>
                    <h1>Patients</h1>
                </div>
                <div className="justify-content-center booking-card p-3 table-style">
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments} />
                </div>
            </div>
        </div>
        </section>
    );
};

export default AllPatients;
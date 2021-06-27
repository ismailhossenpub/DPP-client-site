import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);

        fetch('https://rocky-savannah-25374.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }

    console.log("Dashboard: ",appointments);

    return (
        <section className="containerStyle">
        <div className="row ">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-4 mx-2 mt-5   d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-5 mt-4">
                <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
            </div>
        </div>
    </section>
    );
};

export default Dashboard;
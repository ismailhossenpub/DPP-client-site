import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calendar.css";
const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{height:'600px', paddingTop:"10%"}} className=" row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="mt-0 text-center" style={{color:'#3A4256'}}>Appointment</h1>
                <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
    </main>
    );
};

export default AppointmentHeader;
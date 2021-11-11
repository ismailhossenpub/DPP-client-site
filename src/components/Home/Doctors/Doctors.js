import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://rocky-savannah-25374.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <section className="doctors containerStyle">
      <div className="container">
        <h3 className="text-center  text-brand mb-5">Our Doctors</h3>
        <div className="row">
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

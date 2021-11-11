import React from "react";
import img from "../../../images/doctor-sm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4 text-center">
      <img
        style={{ height: "200px" }}
        className="img-fluid mb-3"
        src={doctor.image}
        alt="No img"
      />
      <h4>{doctor.name}</h4>
      <h6>{doctor.designation}</h6>
      <p>
        <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />
        {doctor.phone}
      </p>
    </div>
  );
};

export default Doctor;

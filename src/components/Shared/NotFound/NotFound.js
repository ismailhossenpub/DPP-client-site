import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center text-center" style={{height:"100vh"}}>
           <div>
                <h1 className=" ">404</h1>
                <p className=" ">Page Not Found</p>
                <Link className="btn btn-brand" to="/"><FontAwesomeIcon className="mr-2" icon={faArrowLeft}/> Go Back</Link>
           </div>
        </div>
    );
};

export default NotFound;
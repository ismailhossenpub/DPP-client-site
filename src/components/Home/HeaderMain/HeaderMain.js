import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';
import "./HeaderMain.css"
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Start Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloribus eaque, molestias quam natus praesentium.</p>
                <Link className="btn btn-brand" to="/appointment">Get appointment</Link>
            </div>
            <div className="col-md-6 mt-5">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;
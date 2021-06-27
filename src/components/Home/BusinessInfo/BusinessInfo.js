import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone} from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {
    const infosData = [
        {
            title:'Opening Hours',
            description:'We are open 7 day',
            icon: faClock,
            background:'primary'
        },
        {
            title:'Visit Our Location',
            description:'Brooklyn, NY 10003 USA',
            icon: faMapMarker,
            background:'dark'
        },
        {
            title:'Call Us Now',
            description:'+153454234',
            icon: faPhone,
            background:'primary'
        },
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {servicesId} = useParams();
    const [singleServiceDetails, setServiceDetails] = useState({});

    useEffect( () => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => {
                const item = data.find(sData => sData.id === parseInt(servicesId))
                setServiceDetails(item)
            });
    },[])

    const {title, details, img} = singleServiceDetails

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-center my-3">
                        <h2>{title}</h2>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
                        <p>{details}</p>
                        <div className="text-center">
                            <button className="btn btn-outline-warning">Take Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;

// 
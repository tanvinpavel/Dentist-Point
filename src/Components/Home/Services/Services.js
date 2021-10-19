import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./Service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])

    return (
        <div className="container my-5">
            <div className="text-center my-3">
                <h2>Services</h2>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service => <Service key={service.id} data={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import Doc from '../Doc/Doc';

const Doctor = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    },[])
    return (
        <div>
            <div className="container my-5">
                <div className="text-center my-3">
                    <h2>Our Doctors</h2>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "190px", "height": "4px"}} ></hr>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    { doctors.map(doc => <Doc key={doc.id} data={doc}></Doc>) }
                </div>
            </div>
        </div>
    );
};

export default Doctor;
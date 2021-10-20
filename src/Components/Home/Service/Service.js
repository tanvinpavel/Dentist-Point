import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {title, img, details, id} = props.data;
    return (
        <div>
            <div className="col h-100 shadow">
                <div className="card text-center h-100">
                    <img src={img} className="card-img-top" style={{"height": "300px", "objectFit": "cover"}} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{details.slice(0,150)+'...'}</p>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mb-2">
                        <Link className="btn btn-outline-warning" to={`/details/${id}`}>Show Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
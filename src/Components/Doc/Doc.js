import React from 'react';

const Doc = (props) => {
    const {name, degree, medical, time, img} = props.data;
    return (
        <div>
            <div className="col h-100 shadow">
                <div className="card h-100">
                    <img src={img} className="card-img-top" style={{"height": "300px"}} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text mb-0">{degree}</p>
                        <p className="card-text mb-0">{medical}</p>
                        <p className="card-text">{time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doc;
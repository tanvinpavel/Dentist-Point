import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="container">
                <section className="row">
                    <div className="col-md-6 d-flex align-item-center" style={{"height": "500px"}}>
                        <img className="img-fluid" src="https://survicate.com/wp-content/uploads/2019/08/AMandaS.png" alt="" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1>Our Dental Practice</h1>
                        <p>Since 1998, Donto Dentistry has been proud to combine modern techniques and high-tech equipment. Dr. John Dae, Micha and his team deliver a personalized and comfortable dental care experience unlike any other Mason dentist..</p>
                    </div>
                </section>
                <section className="pb-5">
                    <div className="text-center mb-3">
                        <h2>Patient Focused Approach</h2>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "35%", "height": "4px"}} ></hr>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 mx-5">
                        <div className="col">
                            <div className="card h-100 card-hover">
                                <img src="https://i.ibb.co/nBWcw1L/download-1.png" className="card-img-top logo-resize" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Consolation</h5>
                                    <p className="card-text">Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 card-hover">
                                <div>
                                    <img src="https://i.ibb.co/XpK0tV0/download-2.png" className="card-img-top logo-resize" alt="..."/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Familiarity</h5>
                                    <p className="card-text">Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 card-hover">
                                <img src="https://i.ibb.co/QQ1kdvn/download.png" className="card-img-top logo-resize" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Outcome</h5>
                                    <p className="card-text">Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row my-5">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1>Experienced Dentist</h1>
                        <p>Dr. Harrie believes in providing her patients with more than just world class dental care. He also helps patients recognize the vital connection between dental health and whole body health. A graduate of the University of California’s School of Dentistry, Dr. Harrie is a leader in the movement to bring environmental sanity and well-being into the dental world for future.</p>
                    </div>
                    <div className="col-md-6 d-flex align-item-center">
                        <img className="img-fluid" src="https://image.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg" alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
import React from "react";

const About = () => {
    return(
        <div> 
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                               <img src="/assets/about1.png" className="img-fluid" alt="About"
                                 classs Name="w-75 mt-5"  /> 
                                </div>
                            <div className="col-md-6">
                                <h3 className="fs-5 mb-0">About Us</h3>
                                <h1 className="display-6 mb-2">Who <b>We</b>Are</h1>
                                <hr className="w-50"/>
                                <p className="lead mp-4">
                                Our experienced technicians offer the most comprehensive on-site PC repair services in the industry.
                               We feel that doing business in a fair and honest manner is the best approach to build long-term relationships with our clients.
                               We are committed to providing our customers with the most friendly, dependable, and honest service and support available anywhere.
                               We provide repair services and support throughout the cities of Colombo and Gampaha! 
                                  </p>
                                  <button className="btn btn-outline-primary rounded-pill px-4 py-2">Get Started</button>
                                  <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                            </div>
                        </div>
                  </div>
                
          </section>
        </div>
    );



};
export default About;
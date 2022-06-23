import React from 'react'

  const Contact = () => {
  return (
    <div>
      <section id="contact">
                    <div className="container ">
                        <div className="row">
                            <div className='col-12'>
                            <h3 className="fs-5 text-center mb-0">Contact Us
                                 </h3>
                                   <h1 className="display-6 text-center mb-4">Have Some 
                                   <b>Question ?</b>Services 
                                   </h1>
                                   <hr className="w-25 mx-auto"/>

                            </div>
                        </div>
                         <div className="row mt-5">
                                 <div className="col-md-4">
                                     <img src="/assets/contact-us.png" alt="Contact" className="w-110" />
                                  </div>
                                  <div className="col-md-8">
                                   <from action=""> 
                                   
                                   
                                   <div class="mb-3">
                                         <label for="name"
                                           class="form-label">
                                             Your Name
                                             </label>
                                            <input 
                                             type="email" 
                                             class="form-control" 
                                             id="name" 
                                             placeholder="Lahiru gayashan"/>
                                      </div>

                                      <div class="mb-3">
                                         <label for="name"
                                           class="form-label">
                                             Email
                                             </label>
                                            <input 
                                             type="email" 
                                             class="form-control" 
                                             id="name" 
                                             placeholder="example@gmail.com"/>
                                      </div>

                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" 
                                          class="form-label">Your Massage</label>
                                          <textarea class="form-control" 
                                          id="exampleFormControlTextarea1" 
                                          rows="5">  
                                          </textarea>
                                        </div>
                                        <button type="submit" 
                                        className="btn btn-outline-primary">
                                          Send Message 
                                          <i className="fa fa-paper-plane ms-2 "></i></button>
                                   
                              
                                  </from>
                          </div>
                    </div>
                </div>
          
            </section> 
    </div>
  )
}
export default Contact;

import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import HelpWrapperComponent from '../components/HelpWrapperComponent';

export default function ContactUs(){      
    const displayStyle1 ={
        border: '0',
        width: '100%'
    } 
    
    return(
        <>
        <Head>
            <title>Business Needs Inc</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-wrapper">
            <section className="inner-banner-wrapper who-we-are-banner">
                <div className="inner-banner-content wow fadeInUp">
                    <h1>Contact Us</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active">Contact Us</li>
                        </ol>         
                    </div>
                </div>
                <div className="banner-img"><img src="images/about-banner.png" alt="" /></div> 
            </section>

            <section className="lets-connect-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="lets-connect wow fadeInUp">
                                <h5 className="section-title-v1">LET'S CONNECT</h5>
                                <h1 className="section-title">Get in touch with us.
                                <br/>We're here to
                                <br/>assist you.</h1>
                                <p>If you are looking for a diverse, well rounded team that has the technology expertise contact Business Needs Inc. to request a free assessment of consultation of your IT Process.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="contact-form wow fadeInUp">
                                <form>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control form-control-lg mb-3 mt-3" id="your-name" placeholder="Your Name" name="your-name" /> 
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="email" className="form-control form-control-lg mb-3 mt-3" id="email" placeholder="Email Address" name="email" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control form-control-lg mb-3 mt-3" id="phone-number" placeholder="Phone Number (optional)" name="your-name" /> 
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <select className="form-select form-select-lg mb-3 mt-3">
                                                <option value="Staffing">Staffing</option>
                                                <option value="IT Staffing">IT Staffing</option>
                                                <option value="Healthcare Staffing">Healthcare Staffing</option>
                                                <option value="Engineering Staffing">Engineering Staffing</option>
                                                <option value="Professional Staffing">Professional Staffing</option>
                                                <option value="Creative and Marketing Staffing">Creative and Marketing Staffing</option>
                                                <option value="Web Application Development">Web Application Development</option>
                                                <option value="Mobile Application Development">Mobile Application Development</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="QA Testing">QA Testing</option>
                                                <option value="RPO">RPO</option>
                                                <option value="Payroll Services">Payroll Services</option>
                                                <option value="Offshore Development Services">Offshore Development Services</option>
                                            </select> 
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <textarea className="form-control form-control-lg mb-3 mt-3" rows="4" id="comment" name="text"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-blue">Leave us a Message <span className="icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span></button>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-info-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="contact-info">
                                <div className="wow fadeInUp">
                                    <h5 className="section-title-v1">CONTACT INFO</h5>
                                    <h1 className="section-title">We are always 
                                        <br/>happy to assist you</h1>
                                </div>
                                <div className="find-us wow fadeInUp">
                                    <h1 className="section-title">Find us</h1>
                                    <p>Locate our regional office through the google map. Our team will assist you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="contact-address-wrapper">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="address-box address-usa wow fadeInUp">
                                            <h4><span className="text">USA</span></h4>
                                            <div className="content">
                                                <p><a href="mailto:info@businessneedsinc.com">info@businessneedsinc.com</a></p>
                                                <p><a href="tel:(909) 869-1173">(909) 869-1173</a></p>
                                                <p>We will get back to your quary<br/> within 24hrs</p>
                                            </div>
                                            <div className="map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1654.1392173747442!2d-117.8441714!3d33.9853813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32bb3182437b7%3A0x622a53cf8b912e40!2sBusiness%20Needs%20Inc!5e0!3m2!1sen!2sin!4v1749813106709!5m2!1sen!2sin" height="440" style={displayStyle1} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>

                                            
                                            <div className="bottom-content">
                                                <h5>Headquarter</h5>
                                                <p><span className="text-black">Business Needs Inc</span>
                                                <br/>1950 S Brea Canyon Rd Suite #5, Diamond Bar, CA 91765, USA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="address-box address-india wow fadeInUp" data-wow-delay="0.2s">
                                            <h4><span className="text">India</span></h4>
                                            <div className="content">
                                                <p><a href="mailto:hr@businessneedsinc.com">hr@businessneedsinc.com</a></p>
                                                <p><a href="tel:(921) 164-9716">(921) 164-9716</a></p>
                                                <p>We will get back to your quary<br/> within 24hrs</p>
                                            </div>
                                            <div className="map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.122262180108!2d77.37518347535816!3d28.626097575668325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51ef01628c9%3A0xc5d7a3e2a2f78da9!2sBusiness%20Needs%20Inc.!5e0!3m2!1sen!2sin!4v1749730794860!5m2!1sen!2sin" height="440" style={displayStyle1} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                            <div className="bottom-content">
                                                <h5>Delivery Center</h5>
                                                <p><span className="text-black">Business Needs Inc</span>
                                                <br/>H-146/147, Sector 63 Rd, H Block, Sector 63, Noida, Uttar Pradesh 201301</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HelpWrapperComponent />
            
        </div>
        </>
    )
}
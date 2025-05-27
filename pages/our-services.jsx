import React from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Link from 'next/link';

const CaseStudySliderComponent = dynamic(() => import('@/components/CaseStudySliderComponent'), {  ssr: false});

export default function OurServices(){   
    
    return(
        <>
        <Head>
            <title>Business Needs Inc: Our Services</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-container"> 
             
            <section className="inner-banner-wrapper who-we-are-banner">
                <div className="inner-banner-content wow fadeInUp">
                    <h1>Our Services</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Our Services</li>
                        </ol>         
                    </div>
                </div>
                <div className="banner-img"><img src="./images/our services-banner.png" alt="" /></div> 
            </section>                  

            <section className="why-bin-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3 order-1 order-lg-2">                          
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#what-we-do">What we do?</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#our-core-services">Our Core Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#our-strategy">Our Strategy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#case-study">Case Study</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 order-2 order-lg-1">                        
                            <div className="tab-content">
                                <div className="active" id="what-we-do">
                                    <div className="why-bin-content">
                                        <h5 className="section-title-v1">What do we do?</h5>
                                        <h1 className="section-title">Excellent Services for Your Business</h1>
                                        <p>At Business Needs Inc. we specialize in Information Technology services and Talent solutions for companies globally. We believe that each client is unique, and there is no such thing as one-size-fits all in the world of technology.</p>
                                        <p>At Business Needs Inc., we provide end-to-end technology and talent solutions to help businesses grow and succeed. From IT consulting and app development to global staffing and workforce solutions, we cater all our services to your specific needs. Our experts bring you the right tools, people, and processes to deliver real and measurable results. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-core-services gray-bg" id="our-core-services">
                <div className="container">
                    <h5 className="section-title-v1 wow fadeInUp">OUR CORE SERVICES</h5>
                    <h1 className="section-title wow fadeInUp">Talent Solution</h1>
                    <div className="service-end-banner">
                        <div className="content wow fadeInUp" data-wow-delay="0.2s">End-to-End Talent Solutions: Connecting You with Top Talent for Sustainable Growth and High-Performance Teams Across Industries</div>
                        <div className="img wow fadeInUp"><img src="./images/talent-solution-banner.png" alt="" /></div>
                    </div>
                    <div className="unified-vision-wrapper">
                        <h1 className="wow fadeInUp">A Unified Vision That Caters To Diverse
                        <br/>Industry Demands</h1>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>IT Staffing</h4>
                                        <p>Get ready to take your team to new heights with our expert recruiting staff</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Creative and Marketing Staffing</h4>
                                        <p>We specialize in creative and marketing staffing, connecting you with top talent to drive your brand forward.</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Healthcare Staffing</h4>
                                        <p>BNI Healthcare boasts a team of experts dedicated to crafting specialized staffing solutions</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>RPO</h4>
                                        <p>Our RPO (Recruitment Process Outsourcing) services streamline your hiring process by providing expert talent acquisition solutions.</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Professional Staffing</h4>
                                        <p>Intuitive mobile app development.</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Payroll Services</h4>
                                        <p>Our payroll services ensure accurate, timely, and compliant management of your employee payroll. </p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Engineering Staffing</h4>
                                        <p>We offer expert engineering staffing services</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-core-services our-consulting-services">
                <div className="container">
                    <h1 className="section-title wow fadeInUp">IT CONSULTING</h1>
                    <div className="service-end-banner">
                        <div className="content wow fadeInUp" data-wow-delay="0.2s">Expert IT Consulting Services: Empowering Your Business with Cutting-Edge Technology Solutions and Strategic Insights</div>
                        <div className="img wow fadeInUp"><img src="images/it-consulting-services-banner.png" alt="" /></div>
                    </div>
                    <div className="unified-vision-wrapper">
                        <h1 className="wow fadeInUp">Services that transform your business with 
                        <br/>advanced technologies</h1>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Web Application Development</h4>
                                        <p>We design and develop custom web applications that are thorough, user-friendly, and scalable. From internal business insights to customer-facing platforms, we design and build responsive webpages that are tailored to your company’s specific needs.</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Digital Marketing</h4>
                                        <p>Maximize your business potential with software that is tailored to your unique needs that enhances your operations.</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Mobile Applications</h4>
                                        <p>Intuitive mobile app development.</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>QA Testing</h4>
                                        <p>Maximize your business potential with software that is tailored to your unique needs that enhances your operations.</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>     

            <section className="our-core-services gray-bg our-offshore-services" >
                <div className="container">
                    <h1 className="section-title wow fadeInUp">Offshore Development</h1>
                    <div className="service-end-banner">
                        <div className="content wow fadeInUp" data-wow-delay="0.2s">Expert IT Consulting Services: Empowering Your Business with Cutting-Edge Technology Solutions and Strategic Insights</div>
                        <div className="img wow fadeInUp"><img src="images/offshore-development-services-banner.png" alt="" /></div>
                    </div>
                    <div className="unified-vision-wrapper">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Offshore Development Center</h4>
                                        <p>Our offshore development center functions as a branch of your team. We establish a hub tailored to your project requirements and goals. We handle the setup of your talent onboarding and project management so that you can focus on innovation and growth. We provide reduced costs, faster deadlines, and full control over your team.</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Dedicated Team</h4>
                                        <p>Our dedicated team is comprised of experienced professionals who work together exclusively on your project. This model offers greater collaboration, stability, and alignment with your company goals. You manage the project, and we take administrative tasks off your plate so that you can focus on your bigger vision.</p>
                                    </div>
                                    <div className="icon">
                                        <a href="/"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  

            <section className="our-strategy-wrapper" id="our-strategy">
                <div className="container">
                    <h5 className="section-title-v1">OUR STRATEGY</h5>
                    <h1 className="section-title wow fadeInUp">Strategy and execution. Delivered simultaneously.</h1>
                    <div className="our-strategy-top">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h2 className="content left-content wow fadeInUp">Expansive Consulting Blended...</h2>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h2 className="content right-content wow fadeInUp">With Agile Delivery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="our-strategy-wrap">
                        <div className="strategy-img wow fadeInUp"><img src="./images/our-strategy-icons.png" alt="" /></div>
                        <div className="strategy-content wow fadeInUp">
                            <div className="content">
                                <h4>Opportunity Identification</h4>
                            </div>
                            <div className="content">
                                <h4>Solution Definition</h4>
                            </div>
                            <div className="content">
                                <h4>Prototype Testing</h4>
                            </div>
                            <div className="content">
                                <h4>MVP</h4>
                            </div>
                            <div className="content">
                                <h4>BETA Release</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   

            <section className="case-study-wrapper gray-bg" id="case-study">
                <div className="container">
                    <CaseStudySliderComponent />                     
                </div>
            </section>

            <section className="can-help-wrapper">
                <div className="container">
                    <div className="can-help wow fadeInUp">
                        <h1 className="section-title">What can we help you achieve?
                        <span className="text-yellow">See how we can help.</span></h1>
                        <div className="white-btn"><a href="/">Work With Us</a></div>
                    </div>
                </div>
            </section>

        </div>

        </>
    )
}
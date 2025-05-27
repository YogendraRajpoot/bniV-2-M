import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TalentSolution(){   
    
    return(
        <>
        <Head>
            <title>Business Needs Inc: Talent Solution</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-container">   
            
            <section className="inner-banner-wrapper who-we-are-banner">
                <div className="inner-banner-content wow fadeInUp">
                    <h1>Our Services</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Our Services</a></li>
                            <li className="breadcrumb-item active">Talent Solution</li>
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
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 order-2 order-lg-1">                           
                            <div className="tab-content">
                                <div className="active" id="what-we-do">
                                    <div className="why-bin-content">
                                        <h5 className="section-title-v1">WHAT WE DO?</h5>
                                        <h1 className="section-title">End-to-End Talent Solutions: Connecting You with Top Talent for Sustainable Growth and High-Performance Teams Across Industries</h1>
                                        <p>At BNI, we provide comprehensive talent solutions that help you find, hire, and nurture the best professionals. From talent sourcing to onboarding and workforce optimization, our services are designed to align with your company’s specific needs, ensuring you build a team that drives success and innovation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-core-services gray-bg" id="our-core-services">
                <div className="container">
                    <h1 className="section-title wow fadeInUp">Executive Recruitment Services</h1>

                   <section className="our-mission-vision-core-wrapper gray-bg">
                        <section className="our-mission-wrapper our-vision-wrapper">
                            <div className="container">
                                <div className="our-mission">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                            <div className="mission-img wow fadeInRight"><img src="./images/case-study.png" alt="" /></div>
                                        </div>
                                        <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                            <div className="mission-content wow fadeInUp">
                                                <h5 className="section-title-v1">IT Staffing</h5>                                        
                                                <p>We provide skilled IT professionals specializing across a wide range of technologies like software development, data analytics, cybersecurity, cloud computing, and more. Whether you need contract, contract-to-hire, or full-time talent, we match you with talented experts ready to help you meet your goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="our-mission-wrapper">
                        <div className="container">
                            <div className="our-mission">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4 col-lg-5">
                                        <div className="mission-img wow fadeInLeft"><img src="./images/case-study.png" alt="" /></div>
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-7">
                                        <div className="mission-content wow fadeInUp">
                                            <h5 className="section-title-v1">Creative and Marketing Staffing</h5>                                    
                                            <p>From graphic designers and copywriters to UX/UI specialists, we help your brand find the professionals who bring your image to life. Our talent pool ranges strategic thinkers and hands-on creators involved in branding, crafting content, campaigns, and digital engagement.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="our-mission-wrapper our-vision-wrapper">
                            <div className="container">
                                <div className="our-mission">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                            <div className="mission-img wow fadeInRight"><img src="./images/case-study.png" alt="" /></div>
                                        </div>
                                        <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                            <div className="mission-content wow fadeInUp">
                                                <h5 className="section-title-v1">Healthcare Staffing</h5>                                        
                                                <p>We deliver highly qualified healthcare professionals to hospitals, clinics, and other healthcare networks. Our services include staffing for nurses, medical assistants, and other administrative roles. We ensure speed, care, and quality when delivering talent.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="our-mission-wrapper">
                        <div className="container">
                            <div className="our-mission">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4 col-lg-5">
                                        <div className="mission-img wow fadeInLeft"><img src="./images/case-study.png" alt="" /></div>
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-7">
                                        <div className="mission-content wow fadeInUp">
                                            <h5 className="section-title-v1">RPO</h5>                                    
                                            <p>Let us manage some or all of your recruitment process. With our RPO services, you gain a reliable partner to handle sourcing, attracting, and onboarding talent. We take tasks off your plate, reducing costs and hiring professional talent on time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="our-mission-wrapper our-vision-wrapper">
                            <div className="container">
                                <div className="our-mission">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                            <div className="mission-img wow fadeInRight"><img src="./images/case-study.png" alt="" /></div>
                                        </div>
                                        <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                            <div className="mission-content wow fadeInUp">
                                                <h5 className="section-title-v1">Professional Staffing</h5>                                        
                                                <p>We connect businesses with professionals across industries like finance, administration, HR, customer service, and other functions. We deliver candidates who align with your culture and goals whether you need them long-term or interim support.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="our-mission-wrapper">
                        <div className="container">
                            <div className="our-mission">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4 col-lg-5">
                                        <div className="mission-img wow fadeInLeft"><img src="./images/case-study.png" alt="" /></div>
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-7">
                                        <div className="mission-content wow fadeInUp">
                                            <h5 className="section-title-v1">Payroll Services</h5>                                    
                                            <p>Our payroll services simplify your compensation and contract management in compliance with your needs. We take on your administrative burdens like handling payroll, tax filing, and coordinating benefits so that you can focus on running your business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="our-mission-wrapper our-vision-wrapper">
                            <div className="container">
                                <div className="our-mission">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                            <div className="mission-img wow fadeInRight"><img src="./images/case-study.png" alt="" /></div>
                                        </div>
                                        <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                            <div className="mission-content wow fadeInUp">
                                                <h5 className="section-title-v1">Engineering Staffing</h5>                                        
                                                <p>Our engineers bring industry-specific experience and technical expertise to bring your innovations to life. We meet your needs where they are by finding the talent with the right skills and background knowledge to help you close projects.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>                   


                </div>
            </section>

            <section className="talent-staffing-wrapper" id="our-strategy">
                <div className="container">
                    <h1 className="section-title wow fadeInUp">Talent Staffing Delivery Models</h1>
                    <div className="talent-staffing">
                        <div className="talent-box wow fadeInUp">
                            <div className="talent-head">
                                <div className="icon"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                <h4>Payroll Services</h4>
                            </div>
                            <div className="talent-content">Direct Hire staffing involves recruiting and placing full-time employees directly with your company. Our team works closely with you to understand your specific hiring needs and company culture, sourcing highly qualified candidates who are the right fit for your organization. Once hired, the candidate becomes a permanent member of your team, and we offer a guarantee on the placement to ensure a successful integration into your workforce.</div>
                        </div>
                        <div className="talent-box wow fadeInUp" data-wow-delay="0.2s">
                            <div className="talent-head">
                                <div className="icon"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                <h4>Contract/Temporary Staffing</h4>
                            </div>
                            <div className="talent-content">Contract or Temporary Staffing is designed for companies that need skilled professionals for short-term projects or to cover temporary gaps, such as seasonal demands or employee leave. In this model, we provide you with qualified workers who are employed by our staffing agency for a defined period. You get the flexibility to meet your immediate staffing needs while we handle the recruitment, onboarding, and HR responsibilities.</div>
                        </div>
                        <div className="talent-box wow fadeInUp" data-wow-delay="0.4s">
                            <div className="talent-head">
                                <div className="icon"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                <h4>Contract-to-Hire/ Temp-to-Perm</h4>
                            </div>
                            <div className="talent-content">Contract-to-Hire (or Temp-to-Perm) allows companies to evaluate a candidate's performance and fit within the organization before committing to a permanent hire. We place candidates in temporary roles, giving you the flexibility to assess their skills and work ethic over a set period. If the candidate is a good match, you have the option to convert them into a full-time employee, making this a great solution for minimizing hiring risks while ensuring a long-term fit.</div>
                        </div>
                    </div>
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
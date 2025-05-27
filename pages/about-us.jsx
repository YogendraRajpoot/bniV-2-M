import React from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Link from 'next/link';

const CelebratingComponent = dynamic(() => import('@/components/CelebratingComponent'), {  ssr: false});
const OurTeamComponent = dynamic(() => import('@/components/OurTeamComponent'), {  ssr: false});

export default function AboutUs(){   
    
    return(
        <>
        <Head>
            <title>Business Needs Inc</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-container">   

            <section className="inner-banner-wrapper who-we-are-banner">
                <div className="inner-banner-content wow fadeInUp">
                    <h1>About BNI</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active">About us</li>
                        </ol>         
                    </div>
                </div>
                <div className="banner-img"><img src="images/about-banner.png" alt="" /></div> 
            </section>

            <section className="why-bin-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3 order-1 order-lg-2">                           
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#why-us">Why Us?</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#our-core-value">Our Core Value</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#our-responsibility">Our Responsibility</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#our-leadership">Our Leadership</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#our-history">Our History</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 order-2 order-lg-1">                         
                            <div className="tab-content">
                                <div className="active" id="why-us">
                                    <div className="why-bin-content">
                                        <h5 className="section-title-v1">About BNI</h5>
                                        <h1 className="section-title">A Team You Can Rely On</h1>
                                        <p>At Business Needs Inc., we don’t just provide IT solutions; we are your trusted partner in driving growth and innovation. Since 2004, we’ve empowered businesses across industries with cutting-edge, customized technology solutions that address today’s unique challenges, from rapid advancements in AI to the pressing demands of the digital age.</p>
                                        <p>Our services span US staffing, IT consulting, and offshore development, with expertise in healthcare staffing, contingent workforce solutions, staff augmentation, app development, website development and permanent direct hire. Whether you're seeking JAVA development talent or end-to-end IT solutions, our knowledgeable team connects you with professionals who understand your complex challenges, incorporate the necessary technology and processes, and provide high-quality delivery. Contact Business Needs Inc. today for a free consultation, and let’s explore how we can elevate your business with tailored, expert solutions.</p>
                                        <div className="blue-btn"><a href="/">Contact Us</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-mission-vision-core-wrapper gray-bg">
                <section className="our-mission-wrapper our-vision-wrapper">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                    <div className="mission-img wow fadeInRight"><img src="./images/our-vision.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                    <div className="mission-content wow fadeInUp">
                                        <h5 className="section-title-v1">OUR VISION</h5>                                        
                                        <p>Business Needs is not one thing, one service, or one product. Business Needs is your trusted partner. Our vision when collaborating is to be your right hand, a shoulder to lean on for all your complex needs. We want to be there for you, whether it is staffing or app development, we cover it all from A-Z.</p>
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
                                <div className="mission-img wow fadeInLeft"><img src="./images/our-mission.png" alt="" /></div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-7">
                                <div className="mission-content wow fadeInUp">
                                    <h5 className="section-title-v1">OUR MISSION</h5>                                    
                                    <p>Our mission is to deliver innovative and scalable IT and staffing solutions that drive business growth. We empower our clients by becoming their trusted partner in all their business ventures. We ensure that our clients receive high quality delivery, reliable support, and measurable impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-mission-wrapper our-vision-wrapper" id="our-core-value">
                <div className="container">
                    <div className="our-mission">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                <div className="mission-img wow fadeInRight"><img src="./images/our-core-valu.png" alt="" /></div>
                            </div>
                            <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                <div className="mission-content wow fadeInUp">
                                    <h5 className="section-title-v1">OUR CORE VALUES</h5>
                                    <h6>Client-Centered Partnership</h6>
                                    <p>We believe in building long-term partnerships. We want our clients to succeed, which means their goals become our mission.</p>
                                    <h6>Innovative Solutions</h6>
                                    <p>We stay ahead of the trends. From embracing cutting edge technology like AI to proactively researching new solutions, we deliver forward-thinking results.</p>
                                    <h6>Excellence in Execution</h6>
                                    <p>Whether it is staffing, consulting, or website development, we are committed to delivering exceptional quality, timely and on target.</p>
                                    <h6>Adaptability and Agility</h6>
                                    <p>In today's fast paced climate with everchanging technology, Business Needs evolves with your needs, ensuring you stay ahead of the curve.</p>
                                    <h6>Diversity and Inclusion</h6>
                                    <p>We value different perspectives and backgrounds within our organization and the talent we deliver.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
                
            </section>

            <section className="celebrating-wrapper">
                <div className="container">
                    <CelebratingComponent />
                </div>
            </section>  

            <section className="our-responsibility-wrapper gray-bg" id="our-responsibility">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="our-responsibility-content wow fadeInUp">
                                <h5 className="section-title-v1">Our Responsibility</h5>
                                <h1 className="section-title">Our Commitment to Sustainability and Social Responsibility </h1>
                                <div className="content">
                                    <p>BNI has always been committed to doing what’s right – for our colleagues, our client partners, and our communities. We pride ourselves on our dedication to creating a positive impact on our planet, our communities, and our employees.</p>
                                </div>
                                <div className="text-blue">#gogreen</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="our-responsibility-img wow fadeInUp"><img src="./images/our-responsibility-img.png" /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="minority-business-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="certified-minority wow fadeInUp">
                                <div className="minority-img"><img src="./images/mbe-image.png" alt="" /></div>
                                <div className="minority-content">
                                    <h2>Proudly MBE-Certified</h2>
                                    <p>As a certified Minority Business Enterprise (MBE), we’re proud to contribute to supplier diversity initiatives across the U.S. Our certification reflects our commitment to inclusion and helps our clients meet diversity goals while gaining access to exceptional IT talent.</p>
                                    <div className="text-yellow">#responsibility</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="certified-minority wow fadeInUp" data-wow-delay="0.1s">
                                <div className="minority-img"><img src="./images/alka.png" alt="" /></div>
                                <div className="minority-content">
                                    <h2>ALKA: Aware. Learn. Know. Apply.</h2>
                                    <p>At ALKA, our mission is to make quality education accessible to every child, in every corner of the world. We believe that with the right education and guidance, every individual has the power to succeed. That’s why we are committed to expanding educational opportunities and resources to those who need them most.</p>
                                    <div className="text-yellow">#GivingBack</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="timeline-wrapper gray-bg" id="our-history">
                <div className="container">
                    <h5 className="section-title-v1">TIMELINE</h5>
                    <h1 className="section-title">Our History</h1>
                    <section className="timeline">
                        <div className="timeline-item left">
                        <div className="content">
                            <h2>2020</h2>
                            <p>Launched AI-driven solutions across global markets.</p>
                        </div>
                        </div>
                        <div className="timeline-item right">
                        <div className="content">
                            <h2>2018</h2>
                            <p>Expanded operations to 90+ countries.</p>
                        </div>
                        </div>                        
                    </section>
                </div>
            </section>

            <section className="our-team-wrapper" id="our-leadership">
                <div className="container">
                    <h5 className="section-title-v1 wow fadeInUp">Our Leadership Team</h5>                                 
                    <OurTeamComponent />
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
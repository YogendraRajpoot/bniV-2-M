"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect} from "react";
import dynamic from "next/dynamic";
const SliderComponent = dynamic(() => import('@/components/SliderComponent'), { ssr: false });

const EmployeeSlider = dynamic(() => import('@/components/EmployeeSlider'), {  ssr: false});

const GoldenClientComponent = dynamic(() => import('@/components/GoldenClientComponent'), {  ssr: false});
const IndustryLeaderComponent = dynamic(() => import('@/components/IndustryLeaderComponent'), {  ssr: false});
const GoogleRatingComponent = dynamic(() => import('@/components/GoogleRatingComponent'), {  ssr: false});
const CaseStudySliderComponent = dynamic(() => import('@/components/CaseStudySliderComponent'), {  ssr: false});

export default function Home(){
  const router = useRouter();   
  return(
        <>
        <Head>
            <title>Business Needs Inc</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>       
        
        <div className="main-container"> 
                     
          <section className="banner-wrapper">
            <div className="banner">
                <SliderComponent />
            </div>
          </section>     

            <section className="reimagine-business-wrapper gray-bg">
              <div className="container">
                  <div className="reimagine-business" id="counter">
                      <h1 className="wow fadeInUp section-title">We Can Help You <span className="text-blue">Reimagine</span> Your Business</h1>
                      <div className="section-top-content wow fadeInUp">
                          <p>Let the numbers speak for themselves.</p>
                      </div>
                      <div id="counter">
                          <div className="row">
                              <div className="col-12 col-lg-4">
                                  <div className="business-box">
                                      <h2><span className="count percent" data-count="35">35</span>+</h2>
                                      <div className="content">Industries Mastered</div>
                                  </div>
                              </div>
                              <div className="col-12 col-lg-4 custom-border">
                                  <div className="business-box">
                                      <h2><span className="count percent" data-count="3000">3000</span>+</h2>
                                      <div className="content">Solutions Designed and Delivered</div>
                                  </div>
                              </div>
                              <div className="col-12 col-lg-4 custom-border">
                                  <div className="business-box">
                                      <h2><span className="count percent" data-count="450">450</span>+</h2>
                                      <div className="content">Legacy Processes Transformed</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section> 

          <section className="about-business-wrapper gray-bg">
            <div className="container-fluid">
                <div className="about-business">
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <div className="about-content wow fadeInUp">
                                <h5 className="section-title-v1">Who We Are</h5>                                                            
                                <div className="content">
                                <p>We are a dynamic IT consulting and staffing firm committed to bridging the gap between exceptional tech talent and innovative companies. With deep industry expertise and a client-first approach, we specialize in delivering scalable workforce solutions—from contract staffing to full-time recruitment and offshore development, we also specialize in IT project consulting through Statements of Work (SOW), providing end-to-end execution and accountability for time-bound technical initiatives. Our mission is to empower businesses by providing them with the right people, strategies, and technologies to drive success in a fast-evolving digital world.</p>
                                </div>
                                <h5 className="section-title-v1">What We Do</h5>                                                            
                                <div className="content">
                                <ul>
                                  <li>Contract & Contract-to-Hire Staffing</li>
                                  <li>Full-Time (Direct Hire) Recruiting</li>
                                  <li>Project-Based Hiring Solutions</li>
                                  <li>Offshore Development Resources</li>
                                  <li>IT Project Consulting (SOW-Based)</li>
                                  <li>Mobile App Development</li>
                                  <li>Web Development</li>
                                  <li>Software Testing Services</li>
                                </ul>
                                </div>
                                <div className="blue-btn"><a href="/">Know More About Us</a></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 align-self-end">
                            <div className="about-image wow fadeInUp"><img src="./images/about-us-img.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="top-category-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <h1 className="wow fadeInUp section-title">Transforming Businesses</h1>
                        <div className="section-top-content wow fadeInUp">
                            <p>We offer a wide range of digital solutions and best-in-class platforms to deliver
                                meaningful outcomes</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="blue-btn top-category-right wow fadeInUp"><a href="/">Book a Service</a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="top-category wow fadeInUp">
                            <div className="content">
                                <h2>Talent Solution</h2>
                                <div className="read-more"><a href="/"><span className="text">Read More</span> <i className="bi bi-arrow-right"></i></a></div>
                            </div>
                            <div className="img"><img src="./images/talent-solution.png" alt="" /></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="top-category wow fadeInUp" data-wow-delay="0.2s">
                            <div className="content">
                                <h2>IT Consulting Services</h2>
                                <div className="read-more"><a href="/"><span className="text">Read More</span> <i className="bi bi-arrow-right"></i></a></div>
                            </div>
                            <div className="img"><img src="./images/talent-it-consulting-services.png" alt="" /></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="top-category wow fadeInUp" data-wow-delay="0.4s">
                            <div className="content">
                                <h2>Offshore
                                    <br/>Development Services</h2>
                                <div className="read-more"><a href="/"><span className="text">Read More</span> <i className="bi bi-arrow-right"></i></a></div>
                            </div>
                            <div className="img"><img src="./images/offshore-development-services.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="our-product-wrapper gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="section-top-content wow fadeInUp ">
                            <h1 className="section-title">Our Product Portfolio</h1>
                            <p>We offer a wide range of Product and solutions and best-in-class platforms to deliver meaningful outcomes</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="blue-btn recent-news-right wow fadeInUp"><a href="/">Enquiry Now</a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="our-product-box wow fadeInUp">
                            <div className="product-img"><img src="./images/our-product-01.png" alt="" /></div>
                            <div className="product-content">
                                <h2>Onpoint Solutions</h2>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                <div className="black-outline-btn"><a href="/">Read More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="our-product-box wow fadeInUp" data-wow-delay="0.2s">
                            <div className="product-img"><img src="./images/our-product-02.png" alt="" /></div>
                            <div className="product-content">
                                <h2>Onpoint Scheduling</h2>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                <div className="black-outline-btn"><a href="/">Read More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="our-product-box wow fadeInUp" data-wow-delay="0.4s">
                            <div className="product-img"><img src="./images/our-product-03.png" alt="" /></div>
                            <div className="product-content">
                                <h2>Onpoint Health Care</h2>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                <div className="black-outline-btn"><a href="/">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="why-choose-wrapper gray-bg">
            <div className="container-fluid">
                <div className="why-choose">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="choose-content">
                                <h1 className="section-title wow fadeInUp">Why Choose <span className="text-blue">Us?</span></h1>
                                <ul className="custom-list">
                                    <li className="wow fadeInUp">
                                        <p>500+ pre-vetted professionals across software development, data engineering, cloud, DevOps, and more.</p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.2s">
                                        <h2>The Right Team</h2>
                                        <p>Expertise in IT project consulting, mobile and web development, and quality assurance.</p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                                        <h2>Fast Timelines</h2>
                                        <p>Fast onboarding – from requirement to joining in as little as one week.</p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                                        <h2>Versatility</h2>
                                        <p>Flexible engagement models tailored to your business needs.</p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                                        <h2>Optimal Support</h2>
                                        <p>U.S.-based support team with global reach.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-end">
                            <div className="choose-image wow fadeInUp"><img src="./images/why-bni.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="case-study-wrapper">
            <div className="container">
              <CaseStudySliderComponent />                
            </div>
        </section>
        

        <section className="makes-responsible-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="makes-us wow fadeInUp">
                            <h1 className="section-title">We Take Responsibility Seriously:</h1>
                            <div className="section-top-content">We are committed to being responsible from sustainability, diversity, to making social impact.</div>
                            <div className="makes-logo">
                                <div className="logo nmsdc"><a href="/"><img src="./images/nmsdc-img.png" alt="" /></a></div>
                                <div className="logo scmsdc"><a href="/"><img src="./images/scm-logo.png" alt="" /></a></div>
                            </div>
                            <div className="white-btn"><a href="/">Know More About Us</a></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="responsibility wow fadeInUp" data-wow-delay="0.2s">
                            <h4>#responsibility</h4>
                            <div className="logo"><a href="/"><img src="./images/mbe-certified.png" alt="" /></a></div>
                            <h3>Proudly MBE-Certified</h3>
                            <p>As a certified Minority Business Enterprise (MBE), we’re proud to contribute to supplier diversity initiatives across the U.S. Our certification reflects our commitment to inclusion and helps our clients meet diversity goals while gaining access to exceptional IT talent.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="responsibility giving-back wow fadeInUp" data-wow-delay="0.4s">
                            <h4>#GivingBack</h4>
                            <div className="logos">
                                <a href="/"><img src="./images/alka-1.png" alt="" /></a>
                                <a href="/"><img src="./images/alka-2.png" alt="" /></a>
                                <a href="/"><img src="./images/alka-3.png" alt="" /></a>
                                <a href="/"><img src="./images/alka-4.png" alt="" /></a>
                            </div>
                            <h3>ALKA: Aware. Learn. Know. Apply.</h3>
                            <p>At ALKA, our mission is to make quality education accessible to every child, in every corner of the world. We believe that with the right education and guidance, every individual has the power to succeed. That’s why we are committed to expanding educational opportunities and resources to those who need them most.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="recent-news-wrapper">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12 col-lg-8">
                        <h5 className="section-title-v1 wow fadeInUp">News and Insights</h5>
                        <h1 className="wow fadeInUp section-title">News and Articles from <span className="text-blue">BNI</span></h1>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="blue-btn recent-news-right wow fadeInUp"><a href="/">View All News and Blog</a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="our-platforms-box wow fadeInUp">
                            <div className="blog-img"><img src="./images/news-img-01.png" alt="" /></div>
                            <div className="blog-content">
                                <h6>Listening is The Communication</h6>
                                <h2>Effective Process or
                                    Efficiency Killer</h2>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typetry. Lorem Ipsum has been the industry's standard dummy.</div>
                                <div className="black-outline-btn"><a href="/">Read More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="our-platforms-box wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-img"><img src="./images/news-img-02.png" alt="" /></div>
                            <div className="blog-content">
                                <h6>Listening is The Communication</h6>
                                <h2>Managing Your Project Sponsors</h2>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typetry. Lorem Ipsum has been the industry's standard dummy.</div>
                                <div className="black-outline-btn"><a href="/">Read More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="our-platforms-box wow fadeInUp" data-wow-delay="0.4s">
                            <div className="blog-img"><img src="./images/news-img-03.png" alt="" /></div>
                            <div className="blog-content">
                                <h6>Listening is The Communication</h6>
                                <h2>Make Your Project Execution Phase As Boring As Possible</h2>
                                <div className="description">Lorem Ipsum is simply dummy text of the printing and typetry. Lorem Ipsum has been the industry's standard dummy.</div>
                                <div className="black-outline-btn"><a href="/">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="empolyee-wrapper">
          <div className="container">
              <EmployeeSlider />
          </div>
        </section>            
        
        <section className="our-golden-clients-wrapper">

            <section className="our-clients-wrapper">
                <div className="container">
                  <h1 className="section-title">Our Golden Clients</h1>
                    <GoldenClientComponent />
                </div>
            </section>  

            <section className="industry-leaders-wrapper">
                <div className="container"> 
                  <h1>Don’t  trust us. Trust the industry leaders</h1>
                  <div className="section-top-content">See what are users are saying about our services and support</div>
                    <IndustryLeaderComponent />
                </div>
            </section>  

             <section className="google-rating-wrapper">
                <div className="container">
                    <GoogleRatingComponent />    
                </div>
              </section>

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
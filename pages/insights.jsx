import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import dynamic from "next/dynamic";

const InsightsComponent = dynamic(() => import('@/components/InsightsComponent'), {  ssr: false});

export default function Insights(){     
    return(
        <>
        <Head>
            <title>Business Needs Inc</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-wrapper">            
            <section className="page-title-wrapper">
                <div className="wow fadeInUp">
                    <h1 className="page-title">News Insights From BNI</h1>
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active">Insights</li>
                        </ol>         
                    </div>
                </div>
            </section>

            <section className="news-insights-wrapper">
                <div className="container">
                    <InsightsComponent /> 
                </div>
            </section>

            <section className="insights-details-wrapper">
                <div className="container">
                    <div className="insights-details-wrap">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="insights-details">
                                    <div className="news-category wow fadeInUp">
                                        <span className="category">Technology</span>
                                        <span className="date">30 March, 2025</span>
                                    </div>
                                    <h1 className="wow fadeInUp">How AI can transform health industery opeartion </h1>
                                    <div className="insights-img wow fadeInUp"><img src="images/news-details-01.png" alt="" /></div>
                                    <div className="insights-content wow fadeInUp">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised make a type specimen book. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. in the Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <div className="author-thought">
                                            <h4 className="thought">“People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.”</h4>
                                            <h6 className="author-name">– Pedro Domingos</h6>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    </div>                                
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="insights-right-side">
                                    <div className="categories-section wow fadeInUp">
                                        <h4>Categories</h4>
                                        <a className="link" href="/">Blogs</a>
                                        <a className="link" href="/">Company Announcements</a>
                                        <a className="link" href="/">From CEO’s Desk</a>
                                        <a className="link" href="/">Case Studies</a>
                                        <a className="link" href="/">News</a>
                                        <a className="link" href="/">Podcasts</a>
                                    </div>
                                    <div className="popular-topics-section wow fadeInUp">
                                        <h4>Popular Topics:</h4>
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Company Announcements</span>
                                                <span className="date">23 March 2025</span>
                                            </div>
                                            <h5>Lorem Ipsum is simply dummy text of the for the print and...</h5>
                                            <div className="read-more"><a href="/">Read More</a></div>
                                        </div>
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">23 March 2025</span>
                                            </div>
                                            <h5>Lorem Ipsum is simply dummy text of the for the print and...</h5>
                                            <div className="read-more"><a href="/">Read More</a></div>
                                        </div>
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">23 March 2025</span>
                                            </div>
                                            <h5>Lorem Ipsum is simply dummy text of the for the print and...</h5>
                                            <div className="read-more"><a href="/">Read More</a></div>
                                        </div>
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">23 March 2025</span>
                                            </div>
                                            <h5>Lorem Ipsum is simply dummy text of the for the print and...</h5>
                                            <div className="read-more"><a href="/">Read More</a></div>
                                        </div>
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">23 March 2025</span>
                                            </div>
                                            <h5>Lorem Ipsum is simply dummy text of the for the print and...</h5>
                                            <div className="read-more"><a href="/">Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
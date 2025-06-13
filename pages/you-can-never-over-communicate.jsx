import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import dynamic from "next/dynamic";
import HelpWrapperComponent from '../components/HelpWrapperComponent';

const InsightsComponent = dynamic(() => import('@/components/InsightsComponent'), {  ssr: false});

export default function YouCanNeverOverCommunicate(){     
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
                                        <span className="category">Blogs</span>
                                        <span className="date">11 December, 2022</span>
                                    </div>
                                    <h1 className="wow fadeInUp">You Can Never Over Communicate</h1>
                                    <div className="insights-img wow fadeInUp"><img src="images/youcan.jpg" alt="" /></div>
                                    <div className="insights-content wow fadeInUp">
                                        <p><strong>I am sure at times you have heard in meetings where one person is complaining about lack of communication and the other is confident that they communicated the same thing several times</strong></p>
                                        <p>Communication can be very complicated. Everyone has their own parameters on how they measure communication and understand what is being said. In several meetings, I have personally had situations where I felt that I provided specific instructions, but the team member executed way different from my expectations. People make assumptions when they speak, listen, or read and try to put these assumptions in their execution.</p>
                                        <p>When speaking, we must always ensure that our intent is clearly stated. There are times when people do not want you to repeat the message. I follow the philosophy that until all listener say got it they have not got it. What I mean is that you must get acknowledgement from each listening member. At times, when the message is not followed with written notes they tend to lose it and later claim that they never got the message.</p>
                                        <p>Most times when a project fails people involved blame the project manager for lack of communication. It is said that 90% of project managers time should be spend communicating. Project managers often communicate same or similar information over and over; people still complain that they never got that information. The key reason is that people only read or listen to information they want in that time. Information needs to be timely and be delivered to the right audiences.</p>
                                        <p>The blame can be placed on neither the person delivering the message nor the person receiving the message. We need to have a very clear communication plan in place. I always tell my team that all communication must follow the simple formula 5W1H (What, Why, When, Where, Who, and How). Following this formula allows me to gear my communication based on the need and leaves less room for open-ended communication.</p>
                                        <p>I will leave you with following thoughts:</p>
                                        <ul className="custom-list">
                                            <li>It is better to over communicate than to under communicate.</li>
                                            <li>You lose the value of your message if the message becomes too general, make sure every message has Who, What, When, Where, Why, and How defined.</li>
                                            <li>You must communicate downward with at least the same importance as you do upward.</li>
                                            <li>Ask for acknowledgements from key stakeholders, if they do not reply, send reminders.</li>
                                        </ul>
                                      
                                    </div>                                
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="insights-right-side">
                                    <div className="categories-section wow fadeInUp">
                                        <h4>Categories</h4>
                                        <Link className="link" href="/insights">Blogs</Link>                                                                        
                                    </div>
                                    <div className="popular-topics-section wow fadeInUp">
                                        <h4>Popular Topics:</h4>
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">9 December, 2024</span>
                                            </div>
                                            <h5>Listening is The Communication</h5>
                                            <div className="read-more"><Link href="/listening-is-the-communication">Read More</Link></div>
                                        </div>
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">10 July, 2024</span>
                                            </div>
                                            <h5>Managing Your Project Sponsors</h5>
                                            <div className="read-more"><Link href="/managing-your-project-sponsors">Read More</Link></div>
                                        </div>
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">16 January, 2024</span>
                                            </div>
                                            <h5>Leaders Set The Tone</h5>
                                            <div className="read-more"><Link href="/leaders-set-the-tone">Read More</Link></div>
                                        </div>
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">11 November, 2023</span>
                                            </div>
                                            <h5>Why Do Many IT Projects Fail?</h5>
                                            <div className="read-more"><Link href="/why-do-many-it-projects-fail">Read More</Link></div>
                                        </div>
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">5 August, 2023</span>
                                            </div>
                                            <h5>Make Your Project Execution Phase As Boring As Possible</h5>
                                            <div className="read-more"><Link href="/make-your-project-execution">Read More</Link></div>
                                        </div>                                          
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">25 March, 2023</span>
                                            </div>
                                            <h5>Effective Process Or Efficiency Killer</h5>
                                            <div className="read-more"><Link href="/effective-process-efficiency-killer">Read More</Link></div>
                                        </div>                                        
                                        <div className="popular-topic">
                                            <div className="news-category">
                                                <span className="category">Blogs</span>
                                                <span className="date">17 January, 2022</span>
                                            </div>
                                            <h5>Every Manager Must Study Sociology</h5>
                                            <div className="read-more"><Link href="/every-manager-must-study-sociology">Read More</Link></div>
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
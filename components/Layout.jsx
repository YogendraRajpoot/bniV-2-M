import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }){
    return(
        <>  
        <Head>  
        </Head>         

        <header>
            <div className="top-head">
                <div className="container"> 
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-6 col-md-6">
                            <div className="social-media-icons">
                                <ul>
                                    <li><a href="/"><i className="bi bi-twitter-x"></i></a></li>
                                    <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                    <li><a href="/"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                    <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <div className="right-area">
                                <ul>
                                    <li><a href="/">Let's Talk</a></li>
                                    <li><a href="/"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-wrapper" id="sticky-header">
                <div className="container">
                    <Navbar />                    
                </div>
            </div>
        </header>
        
        { children }        

        <Footer />                          
        
        </>
    )
}
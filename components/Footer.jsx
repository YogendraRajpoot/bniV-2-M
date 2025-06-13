import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect} from "react";


export default function Footer(){
    const currentRoute = usePathname();
      
    return(
        <>
          <footer>
            <div className="container">
                <div className="middle-footer">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="about-foot">
                              
                                    <div className="footer-logo wow fadeInUp"><a href="#"><img src="images/logo-f.png" alt="" /></a></div>

                                    <div className="sign-up wow fadeInUp">
                                    <h6>SIGN UP FOR NEWSLETTER</h6>
                                    <form>
                                        <div className="row">
                                            <div className="col flex-grow-1">
                                                <input type="text" className="form-control" placeholder="Email address" name="email" />
                                            </div>
                                            <div className="col">
                                                <button type="submit" className="btn btn-blue">Subscirbe</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="top-footer-right wow fadeInUp">
                                    <div className="social-media-links">
                                        <ul>
                                            <li><a href="https://x.com/BusinessNeeds_" target="_blank"><i className="bi bi-twitter-x"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/business-needs-inc" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                            <li><a href="https://www.youtube.com/watch?v=sI1dTHf3Nq0" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>                                  
                                
                                
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <div className="quick-link">
                                <h4 className="wow fadeInUp">Quick Link</h4>
                                <div className="links wow fadeInUp">
                                    <ul>
                                        <li className={currentRoute === "/"?"active":""}><Link href="/">Home</Link></li>
                                        <li className={currentRoute === "/about-us"?"active":""}><Link href="/about-us">About Us</Link></li>
                                        <li className={currentRoute === "/insights"?"active":""}><Link href="/insights">Insights</Link></li>
                                        <li className={currentRoute === "/jobs"?"active":""}><Link href="/jobs">Jobs</Link></li>                                        
                                        <li className={currentRoute === "/contact-us"?"active":""}><Link href="/contact-us">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <div className="quick-link services-link">
                                <h4 className="wow fadeInUp">Services</h4>
                                <div className="links wow fadeInUp">
                                    <ul>
                                        <li className={currentRoute === "/our-services"?"active":""}><Link href="/our-services">Our Services</Link></li>   
                                        <li className={currentRoute === "/talent-solution"?"active":""}><Link href="/talent-solution">Talent Solutions</Link></li>
                                        <li className={currentRoute === "/it-consulting-services"?"active":""}><Link href="/it-consulting-services">IT Consulting Services</Link></li>
                                        <li className={currentRoute === "/offshore-development-services"?"active":""}><Link href="/offshore-development-services">Offshore Development Services</Link></li> 
                                        <li className={currentRoute === "/our-product-portfolio"?"active":""}><Link href="/our-product-portfolio">Our Product Portfolio</Link></li>             
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-12 col-lg-4">
                            <div className="contact-information">
                                <h4 className="wow fadeInUp">Contact Information</h4>
                                <div className="address wow fadeInUp">
                                    <span className="icon"><i className="bi bi-geo-alt"></i></span> <span className="content">Business Needs Inc. 1950 S Brea Canyon Rd Suite #5, Diamond Bar, CA 91765, USA</span>
                                </div>
                                <div className="address wow fadeInUp">
                                    <span className="icon">@</span> <span className="content"><a href="mailto:info@businessneedsinc.com">info@businessneedsinc.com</a></span>
                                </div>
                                <div className="address wow fadeInUp">
                                    <span className="icon"><i className="bi bi-telephone"></i></span> <span className="content"><a href="tel:(909) 869-1173">(909) 869-1173</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-wrapper">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                            <div className="copyright wow fadeInLeft">2025 Business Needs INC. All right reserved.</div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                            <div className="foot-link wow fadeInRight">
                                <ul>
                                    <li><Link href="/contact-us">Help</Link></li>
                                    <li><Link href="/contact-us">Support</Link></li>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/terms-service">Terms of Service</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>

          <link rel="icon" href="favicon.png" />
          <script src="js/jquery.min.js" />  
          <script src="js/popper.min.js" />          
          <script src="js/bootstrap.bundle.min.js" />
          {
            /*            
          <script src="js/bootstrap.min.js" />
            <script src="js/jquery.sticky.js" />
            */
          }          
          <script src="js/slick.js" />          
          <script src="js/custom.js" />
          <script src="js/wow.min.js" />
        </>
    )
}
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
                                            <li><a href="/"><i className="bi bi-twitter-x"></i></a></li>
                                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                            <li><a href="/"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                            <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                                        <li className="active"><a href="#">Home</a></li>
                                        <li><Link href="/about-us">About Us</Link></li>
                                        <li><a href="/insights">Insights</a></li>
                                        <li><a href="#">Career</a></li>                                        
                                        <li><Link href="/contact-us">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <div className="quick-link services-link">
                                <h4 className="wow fadeInUp">Services</h4>
                                <div className="links wow fadeInUp">
                                    <ul>
                                        <li><Link href="/talent-solution">Talent Solution</Link></li>
                                        <li><Link href="/it-consulting-services">IT Consulting Services</Link></li>
                                        <li><Link href="/offshore-development-services">Offshore Development</Link></li>                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-12 col-lg-4">
                            <div className="contact-information">
                                <h4 className="wow fadeInUp">Contact Information</h4>
                                <div className="address wow fadeInUp">
                                    <span className="icon"><i className="bi bi-geo-alt"></i></span> <span className="content">Business Needs Inc. 1950 S Brea Canyon, Diamond Bar , CA‚ 91765, USA</span>
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
                                    <li><a href="/">Help</a></li>
                                    <li><a href="/">Support</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Terms of Service</a></li>
                                    <li><a href="/">Cookies Settings</a></li>
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
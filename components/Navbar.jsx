import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export default function Navbar(){    
    const currentRoute = usePathname();
    const router = useRouter();        

    return(
        <>          
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/"><img src="images/logo.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className={currentRoute === "/"?"nav-item active":"nav-item"} >
                       <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className={currentRoute === "/about-us"?"nav-item active":"nav-item"}>
                       <Link className="nav-link" href="/about-us">About Us</Link>
                    </li>
                    <li className={currentRoute === "/our-services"?"nav-item dropdown position-static mega-menu-wrapper active":"nav-item dropdown position-static mega-menu-wrapper"}>
                    <Link className="nav-link dropdown-toggle" href="/our-services" role="button" >Our Services</Link>
                    <div className="dropdown-menu mega-menu">
                        <div className="row">
                            <div className="col mega-menu-services mega-talent-solution">
                                <h5><Link className="main-link" href="/talent-solution">Talent Solutions</Link></h5>
                                <Link className="link" href="/talent-solution#it-staffing">IT Staffing</Link>
                                <Link className="link" href="/talent-solution#healthcare-staffing">Healthcare Staffing</Link>
                                <Link className="link" href="/talent-solution#engineering-staffing">Engineering Staffing</Link>
                                <Link className="link" href="/talent-solution#professional-staffing">Professional Staffing</Link>
                                <Link className="link" href="/talent-solution#creative-marketing">Creative and Marketing Staffing</Link>
                            </div>
                            <div className="col mega-menu-services mega-it-consulting-services">
                                <h5><Link className="main-link" href="/it-consulting-services">IT Consulting Services</Link></h5>
                                <Link className="link" href="/it-consulting-services#web-application-development">Web Application Development</Link>
                                <Link className="link" href="/it-consulting-services#mobile-applications">Mobile Application Development</Link>
                                <Link className="link" href="/it-consulting-services#digital-marketing">Digital Marketing</Link>
                                <Link className="link" href="/it-consulting-services#qa-testing">QA Testing</Link>
                            </div>
                            <div className="col mega-menu-services mega-offshore-development-services">
                                <h5><Link className="main-link" href="/offshore-development-services">Offshore Development Services</Link></h5>
                                <Link className="link" href="/offshore-development-services#offshore-development-center">Offshore Development Center</Link>
                                <Link className="link" href="/offshore-development-services#dedicated-team">Dedicated Team</Link>
                                <h5 className="link-wrapper"><Link className="main-nav-link" href="/talent-solution#rpo">RPO</Link></h5>
                                <h5 className="link-wrapper"><Link className="main-nav-link" href="/talent-solution#payroll-services">Payroll Services</Link></h5>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className={currentRoute === "/insights"?"nav-item active":"nav-item"}>
                        <Link className="nav-link" href="/insights">Insights</Link>
                    </li>
                    <li className={currentRoute === "/jobs"?"nav-item active":"nav-item"}>
                        <Link className="nav-link" href="/jobs">Jobs</Link>
                    </li>
                    <li className={currentRoute === "/contact-us"?"nav-item active":"nav-item"}>
                        <Link className="nav-link" href="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                </div>
            </nav>        
        </>
    )
}
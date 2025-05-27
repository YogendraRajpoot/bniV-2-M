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
                    <li className="nav-item dropdown position-static mega-menu-wrapper">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Our Services</a>
                    <div className="dropdown-menu mega-menu">
                        <div className="row">
                            <div className="col mega-menu-services mega-talent-solution">
                                <h5><Link className="main-link" href="#">Talent Solution</Link></h5>
                                <Link className="link" href="#">Staffing</Link>
                                <Link className="link" href="#">IT Staffing</Link>
                                <Link className="link" href="#">Healthcare Staffing</Link>
                                <Link className="link" href="#">Engineering Staffing</Link>
                                <Link className="link" href="#">Professional Staffing</Link>
                                <Link className="link" href="#">Creative and Marketing Staffing</Link>
                            </div>
                            <div className="col mega-menu-services mega-it-consulting-services">
                                <h5><Link className="main-link" href="#">IT Consulting Services</Link></h5>
                                <Link className="link" href="#">Web Application Development</Link>
                                <Link className="link" href="#">Mobile Application Development</Link>
                                <Link className="link" href="#">Digital Marketing</Link>
                                <Link className="link" href="#">QA Testing</Link>
                            </div>
                            <div className="col mega-menu-services mega-offshore-development-services">
                                <h5><Link className="main-link" href="#">Offshore Development Services</Link></h5>
                                <Link className="link" href="#">Offshore Development Center</Link>
                                <Link className="link" href="#">Dedicated Team</Link>
                                <h5 className="link-wrapper"><Link className="main-nav-link" href="#">RPO</Link></h5>
                                <h5 className="link-wrapper"><Link className="main-nav-link" href="#">Payroll Services</Link></h5>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/insights">Insights</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Career</Link>
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
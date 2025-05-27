'use client';
import { useEffect } from 'react';

export default function SliderComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".main-slider").length) {
        $(".main-slider").slick({
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: true,
          arrows: false,
        });
      }
    };

    const timer = setTimeout(() => {
      if (typeof $ !== 'undefined') {
        $(document).ready(initSlick);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (    
        <div className="main-slider">
            <div>
                <div className="slide">
                    <div className="banner-content">                       
                        <h1>Optimizing IT Consulting <small>and</small>
                            <br/>Workforce Solutions</h1>
                        <p>We streamline the way businesses access top-tier tech talent by combining deep industry insight with agile staffing models. From consulting engagements to long-term hires, our approach ensures the right people are in place to drive innovation, scale operations, and meet critical IT goals efficiently and effectively.</p>
                        <div className="banner-btns">
                            <span className="blue-btn"><a href="/">Get Started</a></span> 
                            <span className="black-outline-btn"><a href="/">Talk to an Expert</a></span>
                        </div>
                    </div>
                    <div className="banner-img"><img src="images/slider-01.png" alt="" /></div>
                </div>
            </div>
            <div>
                <div className="slide">
                    <div className="banner-content">                      
                       <h1>Optimizing IT Consulting <small>and</small>
                            <br/>Workforce Solutions</h1>
                        <p>We streamline the way businesses access top-tier tech talent by combining deep industry insight with agile staffing models. From consulting engagements to long-term hires, our approach ensures the right people are in place to drive innovation, scale operations, and meet critical IT goals efficiently and effectively.</p>
                         <div className="banner-btns">
                            <span className="blue-btn"><a href="/">Get Started</a></span> 
                            <span className="black-outline-btn"><a href="/">Talk to an Expert</a></span>
                        </div>
                    </div>
                    <div className="banner-img"><img src="images/slider-01.png" alt="" /></div>
                </div>
            </div>
            <div>
                <div className="slide">
                    <div className="banner-content">
                        <h1>Optimizing IT Consulting <small>and</small>
                            <br/>Workforce Solutions</h1>
                        <p>We streamline the way businesses access top-tier tech talent by combining deep industry insight with agile staffing models. From consulting engagements to long-term hires, our approach ensures the right people are in place to drive innovation, scale operations, and meet critical IT goals efficiently and effectively.</p>
                         <div className="banner-btns">
                            <span className="blue-btn"><a href="/">Get Started</a></span> 
                            <span className="black-outline-btn"><a href="/">Talk to an Expert</a></span> 
                        </div>
                    </div>
                    <div className="banner-img"><img src="images/slider-01.png" alt="" /></div>
                </div>
            </div>
        </div>            
  );
}



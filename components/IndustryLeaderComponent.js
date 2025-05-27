'use client';
import { useEffect } from 'react';

export default function IndustryLeaderComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".leaders-slider").length) {
        $(".leaders-slider").slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true, 
            pauseOnHover:true,
            responsive: [
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ] 
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
            <div className="leaders-slider">
                <div>
                    <div className="leader-slide">
                        <div className="leader-head">
                            <div className="leader-img"><img src="./images/testimonials-img-01.png" alt="" /></div>
                            <h4>Dani daniels</h4>
                            <h5>Texas, USA</h5>
                        </div>
                        <div className="leader-content">“Lorem ipsu dolor sit amet, consectetur adipiscg elit,
                            sed do eiusmod tempor incididunt ut labor et magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip excommodo minim veniam, quis nostrud exercitationconsequat.”</div>
                    </div>
                </div>
                <div>
                    <div className="leader-slide">
                        <div className="leader-head">
                            <div className="leader-img"><img src="./images/testimonials-img-01.png" alt="" /></div>
                            <h4>Dani daniels</h4>
                            <h5>Texas, USA</h5>
                        </div>
                        <div className="leader-content">“1 Lorem ipsu dolor sit amet, consectetur adipiscg elit,
                            sed do eiusmod tempor incididunt ut labor et magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip excommodo minim veniam, quis nostrud exercitationconsequat.”</div>
                    </div>
                </div>
                <div>
                    <div className="leader-slide">
                        <div className="leader-head">
                            <div className="leader-img"><img src="./images/testimonials-img-01.png" alt="" /></div>
                            <h4>Dani daniels</h4>
                            <h5>Texas, USA</h5>
                        </div>
                        <div className="leader-content">“2 Lorem ipsu dolor sit amet, consectetur adipiscg elit,
                            sed do eiusmod tempor incididunt ut labor et magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip excommodo minim veniam, quis nostrud exercitationconsequat.”</div>
                    </div>
                </div>
            </div>                                            
  );
}


'use client';
import { useEffect } from 'react';

export default function EmployeeSlider() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".empolyee-slider").length) {
        $(".empolyee-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
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
            <div className="empolyee-slider">
                <div>
                    <div className="empolyee-slide">
                        <div className="slide-no">01 / 03</div>
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="empolyee-content">
                                    <h5 className="section-title-v1">Meet Our Team</h5>
                                    <h1 className="section-title">Here are a few thoughts shared by our <span className="text-blue">Employee</span></h1>
                                    <div className="empolyee-content">Lorem ipsu dolor sit amet, consectetur adipiscg elit, sed do eiusmod tempor incididunt ut labor et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip excommodo minim veniam, quis nostrud exercitationconsequat exercitation ullamco laboris nisi ut exercitation ullamco laboris nisi ut</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="empolyee-right">
                                    <div className="empolyee-img"><img src="./images/employee-mohit-kumar.png" alt="" /></div>
                                    <div className="employee-designation">
                                        <h2>Mohit Kumar</h2>
                                        <h3>Software Engineers</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="empolyee-slide">
                        <div className="slide-no">02 / 03</div>
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="empolyee-content">
                                    <h5 className="section-title-v1">EMPLOYEE OF THE MONTH</h5>
                                    <h1 className="section-title">Here are a few thoughts shared by our <span className="text-blue">Employee</span></h1>
                                    <div className="empolyee-content">Lorem ipsu dolor sit amet, consectetur adipiscg elit, sed do eiusmod tempor incididunt ut labor et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip excommodo minim veniam, quis nostrud exercitationconsequat exercitation ullamco laboris nisi ut exercitation ullamco laboris nisi ut</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="empolyee-right">
                                    <div className="empolyee-img"><img src="./images/employee-mohit-kumar.png" alt="" /></div>
                                    <div className="employee-designation">
                                        <h2>Mohit Kumar</h2>
                                        <h3>Software Engineers</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="empolyee-slide">
                        <div className="slide-no">03 / 03</div>
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="empolyee-content">
                                    <h5 className="section-title-v1">EMPLOYEE OF THE MONTH</h5>
                                    <h1 className="section-title">Here are a few thoughts shared by our <span className="text-blue">Employee</span></h1>
                                    <div className="empolyee-content">Lorem ipsu dolor sit amet, consectetur adipiscg elit, sed do eiusmod tempor incididunt ut labor et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip excommodo minim veniam, quis nostrud exercitationconsequat exercitation ullamco laboris nisi ut exercitation ullamco laboris nisi ut</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="empolyee-right">
                                    <div className="empolyee-img"><img src="./images/employee-mohit-kumar.png" alt="" /></div>
                                    <div className="employee-designation">
                                        <h2>Mohit Kumar</h2>
                                        <h3>Software Engineers</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                   
  );
}



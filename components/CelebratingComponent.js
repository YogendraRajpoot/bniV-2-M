'use client';
import { useEffect } from 'react';

export default function CelebratingComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".our-brands-slider").length) {
        $(".our-brands-slider").slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true, 
            pauseOnHover:true,
            responsive: [
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
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
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="celebrating-img-wrapper">
                        <div className="anniversary-img wow fadeInUp"><img src="./images/anniversary.png" alt="" /></div>
                        <div className="celebrating-img wow fadeInUp"><img src="./images/celebrating-img.png" alt="" /></div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="celebrating-content wow fadeInUp">
                        <h1 className="section-title">Celebrating 20 Years of Excellence</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="celebrating-brands">
                        <h3 className="wow fadeInUp">Our Brands</h3>
                        <div className="our-brands-slider">
                            <div>
                                <div className="brand wow fadeInUp" data-wow-delay="0.1s"><img src="./images/our-brand-01.png" alt="" /></div>
                            </div>
                            <div>
                                <div className="brand wow fadeInUp" data-wow-delay="0.2s"><img src="./images/our-brand-02.png" alt="" /></div>
                            </div>
                            <div>
                                <div className="brand wow fadeInUp" data-wow-delay="0.3s"><img src="./images/our-brand-03.png" alt="" /></div>
                            </div>
                            <div>
                                <div className="brand wow fadeInUp" data-wow-delay="0.1s"><img src="./images/our-brand-01.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                            
  );
}



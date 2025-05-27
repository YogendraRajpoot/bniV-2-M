'use client';
import { useEffect } from 'react';

export default function GoogleRatingComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".reviews-slider").length) {
        $(".reviews-slider").slick({
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
        <div className="row">
            <div className="col-12 col-md-3 col-lg-3 col-xl-2">
                <div className="google-rate">
                    <div className="icon-rate">
                        <div className="icon"><img src="./images/google-icon.png" alt="" /></div>
                        <div className="rate">4.7</div>
                    </div>
                    <h5>Top rated on trustpilot</h5>
                    <div className="rating"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></div>
                </div>
            </div>
            <div className="col-12 col-md-9 col-lg-9 col-xl-10">
                <div className="reviews-wrapper">
                    <div className="reviews-slider">
                        <div>
                            <div className="review-slide">
                                <div className="content">Lorem Ipsum is simply dummy text of the printing  and ed Lorem Ipsum text of the priand scrambled</div>
                                <div className="bottom-area">
                                    <div className="author-img"><img src="./images/review-img-01.png" alt="" /></div>
                                    <div className="author-name">
                                        <div className="name">Austin Cody</div>
                                        <div className="rating"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="review-slide">
                                <div className="content">1 Lorem Ipsum is simply dummy text of the printing  and ed Lorem Ipsum text of the priand scrambled</div>
                                <div className="bottom-area">
                                    <div className="author-img"><img src="./images/review-img-01.png" alt="" /></div>
                                    <div className="author-name">
                                        <div className="name">Austin Cody</div>
                                        <div className="rating"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="review-slide">
                                <div className="content">2 Lorem Ipsum is simply dummy text of the printing  and ed Lorem Ipsum text of the priand scrambled</div>
                                <div className="bottom-area">
                                    <div className="author-img"><img src="./images/review-img-01.png" alt="" /></div>
                                    <div className="author-name">
                                        <div className="name">Austin Cody</div>
                                        <div className="rating"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="review-slide">
                                <div className="content">3 Lorem Ipsum is simply dummy text of the printing  and ed Lorem Ipsum text of the priand scrambled</div>
                                <div className="bottom-area">
                                    <div className="author-img"><img src="./images/review-img-01.png" alt="" /></div>
                                    <div className="author-name">
                                        <div className="name">Austin Cody</div>
                                        <div className="rating"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                                          
  );
}


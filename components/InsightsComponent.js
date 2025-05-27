'use client';
import { useEffect } from 'react';

export default function InsightsComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".insights-slider").length) {
        $(".insights-slider").slick({
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
            <div className="insights-slider">
                <div>
                    <div className="new-insights-box wow fadeInUp">
                        <div className="insights-img"><img src="images/news-01.png" alt="" /></div>
                        <div className="insights-content">
                            <div className="news-category">
                                <span className="category">Travel</span>
                                <span className="date">23 March 2025</span>
                            </div>
                            <h2>Train Or Bus Journey? Which one suits?</h2>
                            <div className="description">The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person</div>
                            <div className="read-more"><a href="/">Read More...</a></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="new-insights-box wow fadeInUp">
                        <div className="insights-img"><img src="images/news-02.png" alt="" /></div>
                        <div className="insights-content">
                            <div className="news-category">
                                <span className="category">Technology</span>
                                <span className="date">17 March 2025</span>
                            </div>
                            <h2>Best Website to research for your  next project</h2>
                            <div className="description">Capitalize on low hanging fruit to identify a ballpark value added activity  beta test. Override the digital added activity divide with additional clickthroughs</div>
                            <div className="read-more"><a href="/">Read More...</a></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="new-insights-box wow fadeInUp">
                        <div className="insights-img"><img src="images/news-02.png" alt="" /></div>
                        <div className="insights-content">
                            <div className="news-category">
                                <span className="category">Travel</span>
                                <span className="date">23 March 2025</span>
                            </div>
                            <h2>Train Or Bus Journey? Which one suits?</h2>
                            <div className="description">The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person</div>
                            <div className="read-more"><a href="/">Read More...</a></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="new-insights-box wow fadeInUp">
                        <div className="insights-img"><img src="images/news-01.png" alt="" /></div>
                        <div className="insights-content">
                            <div className="news-category">
                                <span className="category">Travel 1</span>
                                <span className="date">23 March 2025</span>
                            </div>
                            <h2>Train Or Bus Journey? Which one suits?</h2>
                            <div className="description">The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person</div>
                            <div className="read-more"><a href="/">Read More...</a></div>
                        </div>
                    </div>
                </div>
            </div>                               
  );
}

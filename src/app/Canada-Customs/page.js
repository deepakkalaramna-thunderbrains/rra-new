'use client'
import dynamic from "next/dynamic"
import Footer from "../Footer/footer"

function CanadaCustoms(){
    const Header = dynamic(() => import("../Header/header"), {
        ssr: false,
      });
    return <>
    <Header/> 

    
    {/* <!-- Hero Section Start --> */}
    <section class="cus-hero-sec">
        <div class="row">
            <div class="col-md-12">
                <div class="w-100 h-100 position-relative">
                    <img class="w-100 img-fluid cover" src="/images/hero-CANADA-CUSTOMS.jpg" alt="" />
                    <h1 class="w-100 m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white">CANADA CUSTOMS</h1>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hero Section Ends --> */}

    {/* <!-- Contents Section Start --> */}
    <section class="py-5 cus-experience-rra">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-11 mx-auto pt-5">
                    <div class="row align-items-center">
                        <div class="col-lg-6 px-4">
                            <h2 class="mb-3 text-uppercase">
                                Streamlined Cross-Border Trade
                            </h2>
                            <p>Navigating the complexities of customs regulations is essential for any business involved in international trade. At RRA Group, we specialize in Canadian customs brokerage services, ensuring a smooth and efficient flow of goods across the border.</p>
                            <button type="submit" class="btn btn-primary btn mt-4">
                                <span class="d-flex align-items-center justify-content-center">
                                    Contact Us
                                    <svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="col-lg-6 px-4">
                            <img class="w-100 img-fluid cover" src="/images/streamlined.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Contents Section Ends --> */}

    {/* <!-- What We Offer Grid Section Start --> */}
    <section class="py-5 cus-experience-rra">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 my-3">
                    <h2 class="text-center text-uppercase">What We Offer</h2>
                </div>
                <div class="col-lg-4 my-3">
                    <div class="w-100 h-100 p-5 bg-secondary-dark">
                        <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                                <path d="M76.3229 58.6639L62.6183 51.4409V15.6274C62.6183 11.9473 59.6246 8.93982 55.9581 8.93982H51.5227C51.3166 7.08604 49.7511 5.63039 47.8288 5.63039H45.6454C44.0525 2.82914 41.0589 1.05762 37.7906 1.05762C34.5223 1.05762 31.5288 2.82896 29.9358 5.63039H27.7388C25.8299 5.63039 24.2644 7.08604 24.0449 8.93982H19.6094C15.9428 8.93982 12.9492 11.9471 12.9492 15.6274V65.6124C12.9492 69.2926 15.9428 72.2861 19.6094 72.2861H45.4533V79.9486C45.4533 80.4705 45.7279 80.9372 46.181 81.1706L60.6135 88.7783C60.7371 88.847 61.053 88.943 61.2588 88.943C61.4511 88.943 61.7533 88.8605 61.8906 88.7783L76.3231 81.1706C76.7763 80.9372 77.0508 80.4703 77.0508 79.9486V59.886C77.0507 59.4604 76.8035 58.9248 76.3229 58.6639ZM61.2588 53.8164L72.7389 59.886L68.1936 62.2754L57.3727 55.8762L61.2588 53.8164ZM45.4531 59.886V69.5397H19.6094C17.4534 69.5397 15.6956 67.7819 15.6956 65.6124V15.6274C15.6956 13.4578 17.4534 11.6862 19.6094 11.6862H24.0036V12.9359C24.0036 14.9957 25.6789 16.671 27.7388 16.671H47.8288C49.8886 16.671 51.564 14.9957 51.564 12.9359V11.6864H55.9583C58.1143 11.6864 59.8721 13.4578 59.8721 15.6276V51.4409L46.1812 58.6639C45.7277 58.9111 45.4531 59.433 45.4531 59.886ZM61.2588 65.942L49.765 59.8862L54.5164 57.3732L65.351 63.786L61.2588 65.942ZM74.3043 79.1247L62.632 85.2904V68.3312L66.7792 66.1341V69.9241C66.7792 70.6795 67.3973 71.2973 68.1524 71.2973C68.9215 71.2973 69.5257 70.6795 69.5257 69.9241V64.6785L74.3044 62.1655L74.3043 79.1247Z" fill="#FE7C04"/>
                                <path d="M30.8947 28.8275H50.1948C50.9538 28.8275 51.568 28.2126 51.568 27.4543C51.568 26.6959 50.9538 26.0811 50.1948 26.0811H30.8947C30.1357 26.0811 29.5215 26.6959 29.5215 27.4543C29.5215 28.2128 30.1357 28.8275 30.8947 28.8275Z" fill="#FE7C04"/>
                                <path d="M30.8947 39.8294H50.1948C50.9538 39.8294 51.568 39.2145 51.568 38.4562C51.568 37.6979 50.9538 37.083 50.1948 37.083H30.8947C30.1357 37.083 29.5215 37.6979 29.5215 38.4562C29.5215 39.2145 30.1357 39.8294 30.8947 39.8294Z" fill="#FE7C04"/>
                                <path d="M30.8947 50.8323H50.1948C50.9538 50.8323 51.568 50.2175 51.568 49.4591C51.568 48.7008 50.9538 48.0859 50.1948 48.0859H30.8947C30.1357 48.0859 29.5215 48.7008 29.5215 49.4591C29.5215 50.2175 30.1357 50.8323 30.8947 50.8323Z" fill="#FE7C04"/>
                                <path d="M41.3574 59.2207H30.8947C30.1357 59.2207 29.5215 59.8356 29.5215 60.5939C29.5215 61.3522 30.1357 61.9671 30.8947 61.9671H41.3574C42.1164 61.9671 42.7306 61.3522 42.7306 60.5939C42.7306 59.8356 42.1164 59.2207 41.3574 59.2207Z" fill="#FE7C04"/>
                                <path d="M27.1206 24.6496V30.266C27.1206 31.0213 26.5164 31.6392 25.7474 31.6392H20.131C19.3757 31.6392 18.7578 31.0213 18.7578 30.266V24.6496C18.7578 23.8805 19.3757 23.2764 20.131 23.2764H25.7474C26.5164 23.2764 27.1206 23.8807 27.1206 24.6496Z" fill="#FE7C04"/>
                                <path d="M27.1206 46.6486V52.265C27.1206 53.034 26.5164 53.6382 25.7474 53.6382H20.131C19.3757 53.6382 18.7578 53.034 18.7578 52.265V46.6486C18.7578 45.8933 19.3757 45.2754 20.131 45.2754H25.7474C26.5164 45.2754 27.1206 45.8933 27.1206 46.6486Z" fill="#FE7C04"/>
                                <path d="M22.1029 41.7084C22.428 41.958 22.8391 42.0445 23.22 41.9645C23.6117 41.8833 23.9483 41.6353 24.1427 41.2853L26.9534 36.2116C27.3208 35.5483 27.0809 34.713 26.417 34.3455C25.7558 33.9774 24.9177 34.2173 24.5502 34.8812L22.5132 38.5584L20.9683 37.3682C20.3662 36.9055 19.5026 37.0175 19.0426 37.619C18.5799 38.2199 18.6912 39.0821 19.292 39.5447L22.1029 41.7084Z" fill="#FE7C04"/>
                                <path d="M26.417 56.6819C25.7558 56.3124 24.9177 56.5544 24.5502 57.2177L22.5132 60.8948L20.9683 59.7046C20.3662 59.242 19.5026 59.3539 19.0426 59.9555C18.5799 60.5563 18.6912 61.4185 19.292 61.8811L22.1028 64.0448C22.4278 64.2944 22.8389 64.3809 23.2198 64.3009C23.6115 64.2197 23.9481 63.9717 24.1425 63.6217L26.9533 58.548C27.3208 57.8848 27.0807 57.0494 26.417 56.6819Z" fill="#FE7C04"/>
                            </svg>
                        </div>
                        <h4 class="text-white text-uppercase my-4">Customs Clearance</h4>
                        <p class="text-white mb-0">We facilitate the customs clearance process, ensuring your goods comply with Canadian regulations, minimizing delays, and avoiding costly penalties.</p>
                    </div>
                </div>
                <div class="col-lg-4 my-3">
                    <div class="w-100 h-100 p-5 bg-secondary-dark">
                        <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                                <path d="M28 43C17.5234 43 9 51.5234 9 62C9 72.4766 17.5234 81 28 81C38.4766 81 47 72.4766 47 62C47 51.5234 38.4766 43 28 43ZM36.389 59.6927L26.5371 69.5445C26.1251 69.9568 25.5847 70.163 25.0444 70.163C24.5041 70.163 23.9638 69.9568 23.5517 69.5445L19.3295 65.3223C18.5051 64.498 18.5051 63.1613 19.3295 62.3368C20.1538 61.5125 21.4906 61.5125 22.3151 62.3368L25.0444 65.0663L33.4036 56.7072C34.2279 55.8828 35.5647 55.8828 36.3891 56.7072C37.2134 57.5316 37.2135 58.8684 36.389 59.6927Z" fill="#FE7C04"/>
                                <path d="M64.7821 27.2812C63.6138 27.2812 62.6667 26.3368 62.6667 25.1719V9H32.3462C28.8469 9 26 11.8388 26 15.3281V38.9094C26.6969 38.8464 27.4022 38.8125 28.1154 38.8125C35.3257 38.8125 41.7803 42.0998 46.0519 47.25H69.0128C70.1811 47.25 71.1282 48.1944 71.1282 49.3594C71.1282 50.5243 70.1811 51.4688 69.0128 51.4688H48.8388C50.1611 54.0416 51.0137 56.892 51.2875 59.9062H69.0128C70.1811 59.9062 71.1282 60.8507 71.1282 62.0156C71.1282 63.1806 70.1811 64.125 69.0128 64.125H51.2875C50.6548 71.0914 46.9221 77.1787 41.4787 81H74.6538C78.1531 81 81 78.1612 81 74.6719V27.2812H64.7821ZM69.0128 38.8125H37.9872C36.8189 38.8125 35.8718 37.8681 35.8718 36.7031C35.8718 35.5382 36.8189 34.5938 37.9872 34.5938H69.0128C70.1811 34.5938 71.1282 35.5382 71.1282 36.7031C71.1282 37.8681 70.1811 38.8125 69.0128 38.8125Z" fill="#FE7C04"/>
                                <path d="M67 10V23H80L67 10Z" fill="#FE7C04"/>
                            </svg>
                        </div>
                        <h4 class="text-white text-uppercase my-4">Documentation</h4>
                        <p class="text-white mb-0">Our experts handle all the necessary documentation, including invoices, certificates, and permits, ensuring everything is for customs clearance.</p>
                    </div>
                </div>
                <div class="col-lg-4 my-3">
                    <div class="w-100 h-100 p-5 bg-secondary-dark">
                        <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                                <path d="M55.9585 35.1774C41.5999 35.1774 29.917 46.8019 29.917 61.0887C29.917 75.3755 41.5999 87 55.9585 87C70.3171 87 82 75.3755 82 61.0887C82 46.8019 70.3171 35.1774 55.9585 35.1774ZM50.3621 50.8072C52.3569 50.8072 53.9807 52.4211 53.9807 54.406C53.9807 56.3923 52.3569 58.0081 50.3621 58.0081C48.3673 58.0081 46.7436 56.3925 46.7436 54.406C46.7436 52.4211 48.3673 50.8072 50.3621 50.8072ZM61.5549 71.3702C59.5601 71.3702 57.9363 69.7563 57.9363 67.7715C57.9363 65.7851 59.5601 64.1693 61.5549 64.1693C63.5497 64.1693 65.1734 65.7849 65.1734 67.7715C65.1734 69.7563 63.5497 71.3702 61.5549 71.3702ZM64.5999 56.3231L51.1689 69.6867C50.0988 70.748 48.3826 70.7435 47.3172 69.6867C46.2534 68.6282 46.2534 66.9127 47.3172 65.8542L60.7481 52.4906C61.8119 51.4321 63.5361 51.4321 64.5999 52.4906C65.6636 53.549 65.6636 55.2646 64.5999 56.3231ZM48.6397 3H30.9382C28.8696 3 27.5568 5.2094 28.5503 7.01202L33.7517 16.4569C30.0477 18.6497 28.8583 23.3415 30.928 26.9806C21.7505 30.09 14.6121 37.9023 12.7041 47.7944L8.2481 70.8977C6.63693 79.2586 13.0779 87 21.6212 87H32.9635C35.0131 87 36.0162 84.5208 34.5435 83.1023C17.0893 66.2891 25.226 37.1115 48.5173 31.342C50.6838 30.8054 50.917 27.7436 48.6499 26.9805C50.7194 23.3419 49.5307 18.6497 45.8261 16.4568L51.0276 7.01185C52.0227 5.20669 50.7053 3 48.6397 3ZM41.8314 25.5242H37.7465C36.1823 25.5242 34.9653 24.0152 35.4861 22.3844C35.7942 21.4173 36.7269 20.7823 37.7465 20.7823H41.8314C42.851 20.7823 43.7837 21.4173 44.0918 22.3844C44.6126 24.0152 43.3956 25.5242 41.8314 25.5242Z" fill="#FE7C04"/>
                            </svg>
                        </div>
                        <h4 class="text-white text-uppercase my-4">Tariff Classification</h4>
                        <p class="text-white mb-0">We help you correctly classify your products for tariff purposes, ensuring you pay the right duty and taxes.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- What We Offer Grid Section Ends --> */}

    {/* <!-- Clients Testimonials Section Start --> */}
    <section class="py-5 cus-client-testimonials">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 ms-auto py-3">
                    <div class="testimonial-sec overflow-hidden">
                        <h3 class="text-white text-uppercase pb-4 mb-4">Testimonials</h3>
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="2000">
                                    <div class="carousel-caption">
                                        <p class="text-white">"RRA has been our logistics partner for over adecade, and they continue to exceed our expectations. Their commitment toreliability and safety is unmatched. Whether it's a local delivery or a complexcross-country shipment, they handle every aspect with precision. RRA Group hastruly become an integral part of our supply chain, contributing significantlyto our success. We couldn't ask for a better logistics partner."</p>
                                        <h6 class="m-0 text-white">John Smith</h6>
                                        <span class="text-white">CEO, Smith Electronics Inc.</span>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="4000">
                                    <div class="carousel-caption">
                                        <p class="text-white">"RRA has been our logistics partner for over adecade, and they continue to exceed our expectations. Their commitment toreliability and safety is unmatched. Whether it's a local delivery or a complexcross-country shipment, they handle every aspect with precision. RRA Group hastruly become an integral part of our supply chain, contributing significantlyto our success. We couldn't ask for a better logistics partner."</p>
                                        <h6 class="m-0 text-white">John Smith</h6>
                                        <span class="text-white">CEO, Smith Electronics Inc.</span>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="6000">
                                    <div class="carousel-caption">
                                        <p class="text-white">"RRA has been our logistics partner for over adecade, and they continue to exceed our expectations. Their commitment toreliability and safety is unmatched. Whether it's a local delivery or a complexcross-country shipment, they handle every aspect with precision. RRA Group hastruly become an integral part of our supply chain, contributing significantlyto our success. We couldn't ask for a better logistics partner."</p>
                                        <h6 class="m-0 text-white">John Smith</h6>
                                        <span class="text-white">CEO, Smith Electronics Inc.</span>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" fill="white" fill-opacity="0.1"/>
                                    <path d="M14.7855 18.7144L21.4905 11.8182L19.7227 10L10 20.0001L19.7227 30L21.4905 28.1818L14.7855 21.2857H30V18.7144H14.7855Z" fill="white"/>
                                </svg>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" fill="white" fill-opacity="0.1"/>
                                    <path d="M25.2145 18.7144L18.5095 11.8182L20.2773 10L30 20.0001L20.2773 30L18.5095 28.1818L25.2145 21.2857H10V18.7144H25.2145Z" fill="white"/>
                                </svg>
                              </button>
                        </div>
                        <div class="quote-mark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="202" height="176" viewBox="0 0 202 176" fill="none">
                                <path d="M196.594 67.624C207.025 78.6973 212.626 91.125 212.626 111.271C212.626 146.702 187.754 178.466 151.567 194.165L142.528 180.217C176.298 161.945 182.897 138.246 185.536 123.302C180.099 126.114 172.981 127.102 166.004 126.456C147.734 124.762 133.335 109.764 133.335 91.125C133.335 71.5534 149.201 55.6875 168.773 55.6875C179.638 55.6875 190.027 60.6533 196.594 67.624ZM95.3443 67.624C105.775 78.6973 111.376 91.125 111.376 111.271C111.376 146.702 86.5042 178.466 50.3166 194.165L41.2781 180.217C75.0474 161.945 81.6475 138.246 84.2856 123.302C78.8485 126.114 71.7311 127.102 64.7536 126.456C46.4844 124.762 32.0859 109.764 32.0859 91.125C32.0859 71.5534 47.9518 55.6875 67.5234 55.6875C78.3881 55.6875 88.7777 60.6533 95.3443 67.624Z" fill="white" fill-opacity="0.1"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Clients Testimonials Section Ends --> */}


    <Footer/>
  
    </>
}

export default CanadaCustoms
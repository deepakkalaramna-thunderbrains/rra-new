'use client'

import dynamic from "next/dynamic"
import Header from "../Header/header"
import Footer from "../Footer/footer"



function DutyDrawbacks(){
    const Header = dynamic(() => import("./Header/header.js"), {
        suspense: true,
      });
    return <>
    <Header/>

    <section class="cus-hero-sec">
        <div class="row">
            <div class="col-md-12">
                <div class="w-100 h-100 position-relative">
                    <img class="w-100 img-fluid cover" src="/images/hero-DUTY-DRAWBACKS.jpg" alt="" />
                    <h1 class="w-100 m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white">DUTY DRAWBACKS</h1>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hero Section Ends -->

    <!-- Contents Section Start --> */}
    <section class="py-5 cus-experience-rra">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-11 mx-auto pt-5">
                    <div class="row align-items-center">
                        <div class="col-md-6 px-5">
                            <h4 class="mb-3">
                                Managing the supply chain of international trade involves numerous financial considerations. One such aspect that often goes unnoticed is duty drawbacks.
                            </h4>
                            <p>Duty Drawback is a customs program that allows you to recover the customs duties and taxes paid on imported goods when they are subsequently exported.</p>
                            <p>At RRA Group, we recognize the importance of optimizing your trade operations, and our Duty Drawback services are tailored to do just that.</p>
                            <button type="submit" class="btn btn-primary btn-lg mt-4">
                                <span class="d-flex align-items-center justify-content-center">
                                    I'm Convinced
                                    <svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="col-md-6 px-5">
                            <img class="w-100 img-fluid cover" src="/images/supply-chain.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Contents Section Ends -->

    <!-- What We Offer Grid Section Start --> */}
    <section class="py-5 cus-experience-rra">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 my-3">
                    <h2 class="text-center text-uppercase">How Can We Help?</h2>
                </div>
                <div class="col-md-6 my-3">
                    <div class="w-100 h-100 p-5 bg-secondary-dark">
                        <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                                <g clip-path="url(#clip0_83_957)">
                                  <path d="M52.1159 0C31.6391 0 15.0377 16.6013 15.0377 37.0782C15.0377 45.3998 17.8137 53.0572 22.4437 59.2445L0.806152 80.882L9.92416 90L31.8293 68.0949C37.6619 71.9155 44.6229 74.1563 52.1159 74.1563C72.5927 74.1563 89.1941 57.555 89.1941 37.0782C89.1941 16.6013 72.5927 0 52.1159 0ZM52.1159 64.4838C37.0041 64.4838 24.7103 52.1899 24.7103 37.0782C24.7103 21.9664 37.0041 9.67257 52.1159 9.67257C67.2277 9.67257 79.5215 21.9664 79.5215 37.0782C79.5215 52.1899 67.2277 64.4838 52.1159 64.4838Z" fill="#FE7C04"/>
                                  <path d="M44.0554 30.6299H34.3828V53.1992H44.0554V30.6299Z" fill="#FE7C04"/>
                                  <path d="M56.9524 17.7334H47.2798V53.1995H56.9524V17.7334Z" fill="#FE7C04"/>
                                  <path d="M69.8488 24.1816H60.1763V53.1993H69.8488V24.1816Z" fill="#FE7C04"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_83_957">
                                    <rect width="90" height="90" fill="white"/>
                                  </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h4 class="text-white text-uppercase my-4">In-Depth Analysis</h4>
                        <p class="text-white mb-0">Our experts comprehensively analyze your trade operations to identify eligible duty drawbacks, ensuring you don't miss out on any potential savings.</p>
                    </div>
                </div>
                <div class="col-md-6 my-3">
                    <div class="w-100 h-100 p-5 bg-secondary-dark">
                        <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                                <path d="M74.8828 0H28.343C27.6437 0 26.9731 0.277734 26.4786 0.772383L13.2529 13.9982C12.7582 14.4925 12.4805 15.1632 12.4805 15.8625V87.3633C12.4805 88.8195 13.661 90 15.1172 90H74.8828C76.339 90 77.5195 88.8195 77.5195 87.3633V2.63672C77.5195 1.18055 76.339 0 74.8828 0ZM35.7221 22.3161C36.7516 21.2866 38.4212 21.2866 39.4509 22.3161L42.5218 25.387L50.5492 17.3598C51.579 16.3301 53.2485 16.3301 54.2781 17.3598C55.3078 18.3894 55.3078 20.0589 54.2781 21.0887L44.3863 30.9802C43.3568 32.0098 41.6874 32.0103 40.6575 30.9802L35.7223 26.045C34.6924 25.0154 34.6924 23.3459 35.7221 22.3161ZM64.3359 75.7617H25.6641C24.2079 75.7617 23.0273 74.5812 23.0273 73.125C23.0273 71.6688 24.2079 70.4883 25.6641 70.4883H64.3359C65.7921 70.4883 66.9727 71.6688 66.9727 73.125C66.9727 74.5812 65.7921 75.7617 64.3359 75.7617ZM64.3359 62.5781H25.6641C24.2079 62.5781 23.0273 61.3976 23.0273 59.9414C23.0273 58.4852 24.2079 57.3047 25.6641 57.3047H64.3359C65.7921 57.3047 66.9727 58.4852 66.9727 59.9414C66.9727 61.3976 65.7921 62.5781 64.3359 62.5781ZM64.3359 49.3945H25.6641C24.2079 49.3945 23.0273 48.214 23.0273 46.7578C23.0273 45.3016 24.2079 44.1211 25.6641 44.1211H64.3359C65.7921 44.1211 66.9727 45.3016 66.9727 46.7578C66.9727 48.214 65.7921 49.3945 64.3359 49.3945Z" fill="#FE7C04"/>
                            </svg>
                        </div>
                        <h4 class="text-white text-uppercase my-4">Efficient Documentation</h4>
                        <p class="text-white mb-0">We assist in the preparation and submission of all required documentation to the customs authorities, simplifying the process and minimizing delays.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- What We Offer Grid Section Ends -->

    <!-- Clients Testimonials Section Start --> */}
    <section class="py-5 cus-client-testimonials">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 ms-auto py-3">
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

export default DutyDrawbacks
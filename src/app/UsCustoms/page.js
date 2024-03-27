'use client'

// import Header from "../Header/header"
import dynamic from "next/dynamic"
import Footer from "../Footer/footer"

function UsCustoms(){
    const Header = dynamic(() => import("../Header/header.js"), {
        ssr: false,
    });
    return <>
    {/* <Header/> */}
    {/* <!-- Hero Section Start --> */}
    <section class="cus-hero-sec">
        <div class="row">
            <div class="col-md-12">
                <div class="w-100 h-100 position-relative">
                    <img class="w-100 img-fluid cover" src="/images/hero-US-CUSTOMS.jpg" alt="" />
                    <h1 class="w-100 m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white">U.S CUSTOMS</h1>
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
                            <h2 class="mb-3 text-uppercase">
                                Efficient Cross-Border Trade.
                            </h2>
                            <p>Navigating the intricate web of customs regulations in the United States is crucial for international businesses. RRA Group specializes in US customs brokerage services, ensuring a streamlined and efficient flow of goods across the border.</p>
                            <button type="submit" class="btn btn-primary btn-lg mt-4">
                                <span class="d-flex align-items-center justify-content-center">
                                    Contact Us
                                    <svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="col-md-6 px-5">
                            <img class="w-100 img-fluid cover" src="/images/efficient-cross-border.jpg" alt="" />
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
                    <h2 class="text-center text-uppercase">What We Offer</h2>
                </div>
                <div class="col-md-4 my-3">
                    <div class="w-100 h-100 p-5 bg-secondary-dark">
                        <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                                <g clip-path="url(#clip0_83_779)">
                                  <path d="M63.9688 7.50023H59.3331V3.74977C59.3331 1.68022 57.6756 0 55.625 0C53.5744 0 51.9169 1.68022 51.9169 3.74977V7.50023H22.25V3.74977C22.25 1.68022 20.5925 0 18.5419 0C16.4913 0 14.8331 1.68022 14.8331 3.74977V7.50023H10.1981C4.57249 7.50023 0 12.1234 0 17.8123V59.9998C0 66.2022 4.99145 71.2498 11.125 71.2498H29.6669C31.7175 71.2498 33.375 69.5702 33.375 67.5C33.375 65.4298 31.7175 63.7502 29.6669 63.7502H11.125C9.07777 63.7502 7.41689 62.0666 7.41689 59.9998V30.0002H66.75C66.75 32.0698 68.4075 33.75 70.4581 33.75C72.5087 33.75 74.1669 32.0698 74.1669 30.0002V17.8123C74.1669 12.1234 69.5944 7.50023 63.9688 7.50023Z" fill="#FE7C04"/>
                                  <path d="M64.8947 41.25C51.6043 41.25 40.791 52.1848 40.791 65.6245C40.791 79.0649 51.6043 89.9998 64.8947 89.9998C78.1858 89.9998 88.9991 79.0649 88.9991 65.6245C88.9991 52.1848 78.1858 41.25 64.8947 41.25ZM76.0421 61.5184L63.9903 75.5809C63.3153 76.3685 62.3471 76.8333 61.3204 76.8745C61.2756 76.8745 61.2314 76.8745 61.1866 76.8745C60.2041 76.8745 59.2623 76.4811 58.5649 75.7759L52.0756 69.2136C50.6252 67.747 50.6252 65.3773 52.0756 63.9114C53.5253 62.4447 55.8686 62.4447 57.3189 63.9114L60.9938 67.6275L70.4355 56.6096C71.7779 55.042 74.1212 54.8813 75.668 56.2312C77.2141 57.5846 77.3812 59.9549 76.0421 61.5184Z" fill="#FE7C04"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_83_779">
                                    <rect width="90" height="90" fill="white"/>
                                  </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h4 class="text-white text-uppercase my-4">Timely Deliveries</h4>
                        <p class="text-white mb-0">Our customs expertise expedites the customs clearance process, reducing the risk of border delays.</p>
                    </div>
                </div>
                <div class="col-md-4 my-3">
                    <div class="w-100 h-100 p-5 bg-secondary-dark">
                        <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                                <path d="M81.4875 49.2C78.1923 48.3545 74.9986 47.1537 71.9625 45.6188C71.025 45.15 70.1625 44.7 69.375 44.2688C67.8188 43.4063 66.5813 42.6375 65.775 42.1125C65.729 42.0802 65.6785 42.0549 65.625 42.0375C65.0306 41.6911 64.3524 41.5148 63.6645 41.528C62.9766 41.5413 62.3056 41.7435 61.725 42.1125C56.8871 45.2762 51.5861 47.6673 46.0125 49.2C45.192 49.3994 44.4618 49.8678 43.9385 50.5304C43.4152 51.1931 43.1288 52.0119 43.125 52.8563V56.0625C43.123 60.693 44.2654 65.2521 46.4505 69.3346C48.6357 73.417 51.7959 76.8961 55.65 79.4625L57.3938 80.625L61.6688 83.475C62.0076 83.6983 62.3816 83.863 62.775 83.9625H62.7938C63.1012 84.0685 63.4249 84.1193 63.75 84.1125C64.4909 84.1062 65.2139 83.8847 65.8313 83.475L71.85 79.4625C75.7041 76.8961 78.8643 73.417 81.0495 69.3346C83.2346 65.2521 84.377 60.693 84.375 56.0625V52.8563C84.3712 52.0119 84.0848 51.1931 83.5615 50.5304C83.0382 49.8678 82.308 49.3994 81.4875 49.2ZM70.7062 59.4563L63.2062 66.9563C62.8508 67.3049 62.3728 67.5001 61.875 67.5001C61.3772 67.5001 60.8992 67.3049 60.5438 66.9563L56.7938 63.2063C56.4407 62.8532 56.2423 62.3743 56.2423 61.875C56.2423 61.3757 56.4407 60.8969 56.7938 60.5438C57.1468 60.1907 57.6257 59.9924 58.125 59.9924C58.6243 59.9924 59.1032 60.1907 59.4562 60.5438L61.875 62.9813L68.0438 56.7938C68.2186 56.619 68.4261 56.4803 68.6545 56.3857C68.8829 56.2911 69.1278 56.2424 69.375 56.2424C69.6222 56.2424 69.8671 56.2911 70.0955 56.3857C70.3239 56.4803 70.5314 56.619 70.7062 56.7938C70.8811 56.9686 71.0197 57.1762 71.1144 57.4046C71.209 57.633 71.2577 57.8778 71.2577 58.125C71.2577 58.3723 71.209 58.6171 71.1144 58.8455C71.0197 59.0739 70.8811 59.2815 70.7062 59.4563Z" fill="#FE7C04"/>
                                <path d="M66.7125 24.8252L50.6813 8.43774C50.1058 7.85547 49.4566 7.35117 48.75 6.93774V20.6252C48.7545 22.1157 49.3485 23.5439 50.4024 24.5978C51.4564 25.6517 52.8845 26.2458 54.375 26.2502H67.8563C67.518 25.7423 67.1352 25.2654 66.7125 24.8252ZM69.2625 30.0002H54.375C51.8886 30.0002 49.504 29.0125 47.7459 27.2544C45.9877 25.4962 45 23.1116 45 20.6252V5.70024C44.6652 5.64731 44.3265 5.62223 43.9875 5.62524H15C12.5136 5.62524 10.129 6.61296 8.37087 8.37112C6.61272 10.1293 5.625 12.5138 5.625 15.0002V75.0002C5.625 77.4866 6.61272 79.8712 8.37087 81.6294C10.129 83.3875 12.5136 84.3752 15 84.3752H56.2688L53.5688 82.5752C49.2 79.6693 45.6178 75.7278 43.1414 71.102C40.6649 66.4762 39.371 61.3097 39.375 56.0627V52.8565C39.3757 51.6969 39.6453 50.5533 40.1626 49.5155C40.6799 48.4776 41.4308 47.5739 42.3563 46.8752H18.75C18.2527 46.8752 17.7758 46.6777 17.4242 46.3261C17.0725 45.9744 16.875 45.4975 16.875 45.0002C16.875 44.503 17.0725 44.026 17.4242 43.6744C17.7758 43.3228 18.2527 43.1252 18.75 43.1252H52.0125C54.6675 41.928 57.2307 40.5367 59.6813 38.9627C60.7806 38.2643 62.0415 37.8611 63.3421 37.7922C64.6428 37.7232 65.9392 37.9908 67.1063 38.569L67.2375 38.6252L67.8 38.9627C68.1938 39.2252 68.7188 39.544 69.375 39.9377V31.3877C69.3756 30.9229 69.338 30.4589 69.2625 30.0002ZM39.375 67.5002C39.375 67.9975 39.1775 68.4744 38.8258 68.8261C38.4742 69.1777 37.9973 69.3752 37.5 69.3752H18.75C18.2527 69.3752 17.7758 69.1777 17.4242 68.8261C17.0725 68.4744 16.875 67.9975 16.875 67.5002C16.875 67.003 17.0725 66.526 17.4242 66.1744C17.7758 65.8228 18.2527 65.6252 18.75 65.6252H37.5C37.9973 65.6252 38.4742 65.8228 38.8258 66.1744C39.1775 66.526 39.375 67.003 39.375 67.5002ZM18.75 54.3752H33.75C34.2473 54.3752 34.7242 54.5728 35.0758 54.9244C35.4275 55.276 35.625 55.753 35.625 56.2502C35.625 56.7475 35.4275 57.2244 35.0758 57.5761C34.7242 57.9277 34.2473 58.1252 33.75 58.1252H18.75C18.2527 58.1252 17.7758 57.9277 17.4242 57.5761C17.0725 57.2244 16.875 56.7475 16.875 56.2502C16.875 55.753 17.0725 55.276 17.4242 54.9244C17.7758 54.5728 18.2527 54.3752 18.75 54.3752ZM18.75 20.6252H33.75C34.2473 20.6252 34.7242 20.8228 35.0758 21.1744C35.4275 21.526 35.625 22.003 35.625 22.5002C35.625 22.9975 35.4275 23.4744 35.0758 23.8261C34.7242 24.1777 34.2473 24.3752 33.75 24.3752H18.75C18.2527 24.3752 17.7758 24.1777 17.4242 23.8261C17.0725 23.4744 16.875 22.9975 16.875 22.5002C16.875 22.003 17.0725 21.526 17.4242 21.1744C17.7758 20.8228 18.2527 20.6252 18.75 20.6252ZM45 35.6252H18.75C18.2527 35.6252 17.7758 35.4277 17.4242 35.0761C17.0725 34.7244 16.875 34.2475 16.875 33.7502C16.875 33.253 17.0725 32.776 17.4242 32.4244C17.7758 32.0728 18.2527 31.8752 18.75 31.8752H45C45.4973 31.8752 45.9742 32.0728 46.3258 32.4244C46.6775 32.776 46.875 33.253 46.875 33.7502C46.875 34.2475 46.6775 34.7244 46.3258 35.0761C45.9742 35.4277 45.4973 35.6252 45 35.6252Z" fill="#FE7C04"/>
                            </svg>
                        </div>
                        <h4 class="text-white text-uppercase my-4">Compliance Assurance</h4>
                        <p class="text-white mb-0">We ensure your goods meet all regulatory requirements, reducing the risk of penalties and fines.</p>
                    </div>
                </div>
                <div class="col-md-4 my-3">
                    <div class="w-100 h-100 p-5 bg-secondary-dark">
                        <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                                <g clip-path="url(#clip0_83_793)">
                                  <path d="M63.75 0C49.275 0 37.5 11.7788 37.5 26.25C37.5 40.7213 49.275 52.5 63.75 52.5C78.225 52.5 90 40.7213 90 26.25C90 11.7788 78.225 0 63.75 0ZM62.325 23.4375H65.175C69.5588 23.4375 73.125 27.0038 73.125 31.3875C73.125 35.3288 70.2825 38.5725 66.5625 39.2325V42.1838C66.5625 43.7363 65.3025 44.9963 63.75 44.9963C62.1975 44.9963 60.9375 43.7363 60.9375 42.1838V39.375H57.1875C55.635 39.375 54.375 38.115 54.375 36.5625C54.375 35.01 55.635 33.75 57.1875 33.75H65.175C66.4575 33.75 67.5 32.7075 67.5 31.425C67.5 30.105 66.4575 29.0625 65.175 29.0625H62.325C57.9413 29.0625 54.375 25.4963 54.375 21.1125C54.375 17.1713 57.2175 13.9275 60.9375 13.2675V10.3125C60.9375 8.76 62.1975 7.5 63.75 7.5C65.3025 7.5 66.5625 8.76 66.5625 10.3125V13.125H70.3125C71.865 13.125 73.125 14.385 73.125 15.9375C73.125 17.49 71.865 18.75 70.3125 18.75H62.325C61.0425 18.75 60 19.7925 60 21.075C60 22.395 61.0425 23.4375 62.325 23.4375Z" fill="#FE7C04"/>
                                  <path d="M1.84125 45.0072C0.82125 45.0259 0 45.8584 0 46.8822V80.6247C0 81.6597 0.84 82.4997 1.875 82.4997H9.8325C10.6725 82.4997 11.4075 81.9447 11.6362 81.1384L19.935 51.8959C20.4713 50.0059 19.4587 48.0184 17.61 47.3472C14.2125 46.1097 9 44.8872 1.84125 45.0072Z" fill="#FE7C04"/>
                                  <path d="M82.5002 65.6252C75.0002 65.6252 60.0002 75.1164 52.5002 75.1164C45.0002 75.1164 36.5627 69.3752 36.5627 69.3752C36.5627 69.3752 46.6652 71.2502 52.5002 71.2502C58.3352 71.2502 60.0002 69.2589 60.0002 66.5627C60.0002 60.0002 48.8552 58.9802 43.2152 58.1214C37.6802 55.0389 34.8039 52.6014 25.6352 51.8252C25.5827 52.3614 25.5002 52.8939 25.3502 53.4227L17.8164 79.9727C26.3477 83.854 41.0402 90.0002 48.7502 90.0002C60.0002 90.0002 90.0002 75.0002 90.0002 71.2502C90.0002 67.5002 86.2502 65.6252 82.5002 65.6252Z" fill="#FE7C04"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_83_793">
                                    <rect width="90" height="90" fill="white"/>
                                  </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h4 class="text-white text-uppercase my-4">Cost Efficiency</h4>
                        <p class="text-white mb-0">Our duty optimization strategies help minimize duty and tax expenses, boosting your cost-effectiveness.</p>
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
    {/* <Footer/> */}
    </>
}
export default UsCustoms
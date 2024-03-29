'use client'

import dynamic from "next/dynamic";
import Footer from "../Footer/footer";
import "../styles/breakpoints.css"
import "../styles/custom.css"
import "../styles/index.css"
import "../styles/variables.css"

function TradeShowFreight() {
  const Header = dynamic(() => import("../Header/header.js"), {
    ssr: false,
  });
  return (
    <>
      <Header />

      <section class="cus-hero-sec">
        <div class="row">
          <div class="col-md-12">
            <div class="w-100 h-100 position-relative">
              <img
                class="w-100 img-fluid cover"
                src="/images/hero-TRADE-SHOW-FREIGHT.jpg"
                alt=""
              />
              <h1 class="w-100 m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white">
                TRADE SHOW FREIGHT
              </h1>
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
                    Seamless Logistics for Your Event Success
                  </h2>
                  <p>
                    When it comes to trade shows, the right logistics partner
                    can make all the difference. At RRA Group, we specialize in
                    trade show freight services designed to ensure your
                    exhibitions are a resounding success.
                  </p>
                  <button type="submit" class="btn btn-primary btn-lg mt-4">
                    <span class="d-flex align-items-center justify-content-center">
                      Contact Us
                      <svg
                        class="ms-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="col-md-6 px-5">
                  <img
                    class="w-100 img-fluid cover"
                    src="/images/seamless-logistics.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contents Section Ends -->

    <!-- Experience Grid Section Start --> */}
      <section class="py-5 cus-experience-rra">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 my-3">
              <h2 class="text-center text-uppercase">What We Offer</h2>
            </div>
            <div class="col-md-4 my-3">
              <div class="w-100 h-100 p-5 bg-secondary-dark">
                <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_83_380)">
                      <path
                        d="M78.7999 62.6183L89.9998 51.4192L78.7999 40.2193L80.6044 38.4148C83.7266 35.2926 83.7266 30.2128 80.6051 27.0907C79.0925 25.5787 77.0813 24.7458 74.9424 24.7458C72.8042 24.7458 70.793 25.5787 69.281 27.0907L67.4765 28.8952L56.2766 17.6953L52.9718 21.0008V26.2248C58.8179 27.618 63.1788 32.8853 63.1788 39.1516C63.1788 45.4186 58.8179 50.6858 52.9718 52.0783V68.277H43.2764L41.3435 70.2099L56.2766 85.1423L67.4765 73.9425L69.0317 75.4984C72.1539 78.6206 77.2337 78.6206 80.3559 75.4984C83.4781 72.3762 83.4781 67.2964 80.3559 64.1743L78.7999 62.6183Z"
                        fill="#FE7C04"
                      />
                      <path
                        d="M47.6922 62.9976V47.1587H49.8916C54.3074 47.1587 57.8992 43.5669 57.8992 39.1511C57.8992 34.736 54.3074 31.1441 49.8916 31.1441H47.6922V15.3053H31.8534V12.7537C31.8534 8.33793 28.2616 4.74609 23.8458 4.74609C19.4307 4.74609 15.8388 8.33793 15.8388 12.7537V15.3053H0V31.1441H2.20001C6.07405 31.1441 9.31364 33.9092 10.0497 37.5697C10.369 38.0161 10.5592 38.5613 10.5592 39.1511C10.5592 39.7409 10.369 40.2861 10.0497 40.7331C9.31364 44.3929 6.07405 47.1587 2.20001 47.1587H0V62.9976H15.8388V60.4453C15.8388 56.0302 19.4307 52.4383 23.8458 52.4383C28.2616 52.4383 31.8534 56.0302 31.8534 60.4453V62.9976H47.6922Z"
                        fill="#FE7C04"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_83_380">
                        <rect width="90" height="90" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h4 class="text-white text-uppercase my-4">
                  Meticulous Planning
                </h4>
                <p class="text-white mb-0">
                  We provide a range of transportation options, such as ground
                  shipping, ocean freight, and air cargo. Our border-crossing
                  experience is flawless, insuring a 100% success rate.
                </p>
              </div>
            </div>
            <div class="col-md-4 my-3">
              <div class="w-100 h-100 p-5 bg-secondary-dark">
                <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_83_387)">
                      <path
                        d="M19.7494 0C13.9173 0 9.17249 4.73558 9.17249 10.5563C9.17249 16.3771 13.9173 21.1127 19.7492 21.1127C25.5815 21.1127 30.3263 16.3771 30.3263 10.5563C30.3263 4.73558 25.5815 0 19.7494 0Z"
                        fill="#FE7C04"
                      />
                      <path
                        d="M28.2492 24.7441C26.5269 25.7663 24.7892 26.4618 22.714 26.8138V38.6072H16.7184V26.8138C14.8736 26.4618 12.9058 25.7663 11.1834 24.7441C4.68248 27.977 0.576904 34.5693 0.576904 41.9376V47.5743H38.8556V41.9376C38.8556 34.5693 34.7502 27.977 28.2492 24.7441Z"
                        fill="#FE7C04"
                      />
                      <path
                        d="M70.2435 42.4307C64.4112 42.4307 59.6664 47.1662 59.6664 52.987C59.6664 58.808 64.4112 63.5434 70.2435 63.5434C76.0756 63.5434 80.8202 58.8078 80.8202 52.987C80.8202 47.1661 76.0754 42.4307 70.2435 42.4307Z"
                        fill="#FE7C04"
                      />
                      <path
                        d="M78.8125 67.1797C77.0894 68.2022 75.1208 68.898 73.2754 69.2501V81.0301H67.2777V69.2501C65.2015 68.898 63.4635 68.2022 61.7404 67.1797C55.2369 70.4137 51.13 77.0083 51.13 84.3797V90.0001H89.4231V84.3797C89.4231 77.0083 85.316 70.4135 78.8125 67.1797Z"
                        fill="#FE7C04"
                      />
                      <path
                        d="M41.8237 79.2604C28.1914 78.0154 16.5785 68.7996 12.2383 55.7821L17.3071 54.0869C20.9754 65.0892 30.7892 72.8783 42.3091 73.9304L41.8237 79.2604Z"
                        fill="#FE7C04"
                      />
                      <path
                        d="M72.8062 35.925C68.931 23.7623 57.7552 15.5906 44.9964 15.5906C43.6508 15.5906 42.2981 15.6831 40.976 15.8652L40.2473 10.5631C41.81 10.3475 43.4079 10.2383 44.9964 10.2383C59.8748 10.2383 73.3842 20.1346 77.8969 34.2979L72.8062 35.925Z"
                        fill="#FE7C04"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_83_387">
                        <rect width="90" height="90" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h4 class="text-white text-uppercase my-4">
                  Seamless Coordination
                </h4>
                <p class="text-white mb-0">
                  Successful trade shows require perfect coordination. RRA Group
                  ensures that every aspect of your materials' transportation is
                  seamless, saving you time and effort.
                </p>
              </div>
            </div>
            <div class="col-md-4 my-3">
              <div class="w-100 h-100 p-5 bg-secondary-dark">
                <div class="w-100 d-flex align-items-center justify-content-start pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_83_401)">
                      <path
                        d="M80.5444 20.6549L46.5339 0.421611C45.5887 -0.140537 44.4115 -0.140537 43.4663 0.421611L9.45563 20.6549C8.54667 21.1958 7.98944 22.1756 7.98944 23.2333V34.7833C7.98944 59.1104 22.0449 81.3295 43.9168 89.7976C44.6131 90.0672 45.3862 90.0676 46.0832 89.7976C67.902 81.3506 82.0104 59.1797 82.0104 34.7833V23.2333C82.0106 22.1754 81.4535 21.1958 80.5444 20.6549ZM59.8214 38.2587L41.0189 57.0613C39.8473 58.2329 37.9478 58.2329 36.7763 57.0613L30.1774 50.4627C29.0058 49.2913 29.0058 47.3916 30.1774 46.22C31.349 45.0486 33.2487 45.0486 34.4201 46.22L38.8974 50.6973L55.5787 34.016C56.7501 32.8446 58.6498 32.8446 59.8214 34.016C60.9931 35.1878 60.9931 37.0873 59.8214 38.2587Z"
                        fill="#FE7C04"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_83_401">
                        <rect width="90" height="90" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h4 class="text-white text-uppercase my-4">
                  Reliable Transportation
                </h4>
                <p class="text-white mb-0">
                  We understand that your materials are crucial for your event's
                  success. That's why we provide reliable transportation
                  services, ensuring your materials arrive on time and on
                  intact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Experience Grid Section Ends -->

    <!-- Clients Testimonials Section Start --> */}
      <section class="py-5 cus-client-testimonials">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 ms-auto py-3">
              <div class="testimonial-sec overflow-hidden">
                <h3 class="text-white text-uppercase pb-4 mb-4">
                  Testimonials
                </h3>
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                      <div class="carousel-caption">
                        <p class="text-white">
                          "RRA has been our logistics partner for over adecade,
                          and they continue to exceed our expectations. Their
                          commitment toreliability and safety is unmatched.
                          Whether it's a local delivery or a
                          complexcross-country shipment, they handle every
                          aspect with precision. RRA Group hastruly become an
                          integral part of our supply chain, contributing
                          significantlyto our success. We couldn't ask for a
                          better logistics partner."
                        </p>
                        <h6 class="m-0 text-white">John Smith</h6>
                        <span class="text-white">
                          CEO, Smith Electronics Inc.
                        </span>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                      <div class="carousel-caption">
                        <p class="text-white">
                          "RRA has been our logistics partner for over adecade,
                          and they continue to exceed our expectations. Their
                          commitment toreliability and safety is unmatched.
                          Whether it's a local delivery or a
                          complexcross-country shipment, they handle every
                          aspect with precision. RRA Group hastruly become an
                          integral part of our supply chain, contributing
                          significantlyto our success. We couldn't ask for a
                          better logistics partner."
                        </p>
                        <h6 class="m-0 text-white">John Smith</h6>
                        <span class="text-white">
                          CEO, Smith Electronics Inc.
                        </span>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="6000">
                      <div class="carousel-caption">
                        <p class="text-white">
                          "RRA has been our logistics partner for over adecade,
                          and they continue to exceed our expectations. Their
                          commitment toreliability and safety is unmatched.
                          Whether it's a local delivery or a
                          complexcross-country shipment, they handle every
                          aspect with precision. RRA Group hastruly become an
                          integral part of our supply chain, contributing
                          significantlyto our success. We couldn't ask for a
                          better logistics partner."
                        </p>
                        <h6 class="m-0 text-white">John Smith</h6>
                        <span class="text-white">
                          CEO, Smith Electronics Inc.
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M14.7855 18.7144L21.4905 11.8182L19.7227 10L10 20.0001L19.7227 30L21.4905 28.1818L14.7855 21.2857H30V18.7144H14.7855Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M25.2145 18.7144L18.5095 11.8182L20.2773 10L30 20.0001L20.2773 30L18.5095 28.1818L25.2145 21.2857H10V18.7144H25.2145Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div class="quote-mark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="202"
                    height="176"
                    viewBox="0 0 202 176"
                    fill="none"
                  >
                    <path
                      d="M196.594 67.624C207.025 78.6973 212.626 91.125 212.626 111.271C212.626 146.702 187.754 178.466 151.567 194.165L142.528 180.217C176.298 161.945 182.897 138.246 185.536 123.302C180.099 126.114 172.981 127.102 166.004 126.456C147.734 124.762 133.335 109.764 133.335 91.125C133.335 71.5534 149.201 55.6875 168.773 55.6875C179.638 55.6875 190.027 60.6533 196.594 67.624ZM95.3443 67.624C105.775 78.6973 111.376 91.125 111.376 111.271C111.376 146.702 86.5042 178.466 50.3166 194.165L41.2781 180.217C75.0474 161.945 81.6475 138.246 84.2856 123.302C78.8485 126.114 71.7311 127.102 64.7536 126.456C46.4844 124.762 32.0859 109.764 32.0859 91.125C32.0859 71.5534 47.9518 55.6875 67.5234 55.6875C78.3881 55.6875 88.7777 60.6533 95.3443 67.624Z"
                      fill="white"
                      fill-opacity="0.1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Clients Testimonials Section Ends --> */}

      <Footer />
    </>
  );
}

export default TradeShowFreight;

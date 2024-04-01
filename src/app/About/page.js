// "use client"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/slick-carousel/slick/slick.css'
import dynamic from 'next/dynamic';
import Footer from "../Footer/footer";
import '../../app/styles/index.css'

function About() {
    const Header = dynamic(() => import("../Header/header.js"), {
        ssr: false,
      });
    return (
        <>
            <Header />

            <section className="cus-hero-sec">
                <div className="row">
                    <div className="col-md-12">
                        <div className="w-100 h-100 position-relative">
                            <img className="w-100 img-fluid cover" src="/images/hero-about-us.jpg" height="500" width="500" />
                            <h1 className="w-100 m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white font-900">About Us</h1>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 cus-about-contents">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 mx-auto py-5">
                            <h2 className="m-0 text-center text-uppercase"><span className="text-orange">RRA Group</span> is a North American logistics and supply chain provider with a unique IT-driven approach</h2>
                        </div>
                        <div className="col-md-11 mx-auto pt-3">
                            <div className="row align-items-center">
                                <div className="col-lg-6 px-5">
                                    <img className="w-100 img-fluid cover" src="/images/plane-trucks-are-flying.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 px-5">
                                    <h3>Founded by Gursewak Singh,</h3>
                                    <p>RRA Group (Rapid Resourceful Approach) is a North American logistics and supply chain provider with a unique IT-driven approach. We operate under three distinct entities, including RRA Trucking Ltd. in Canada, RRA Trucking Inc. in the USA, and HGA Logistics in Canada.</p>
                                    <p>Just like our name, we embody a rapid and resourceful approach to providing comprehensive logistics solutions. We specialize in end-to-end services, from efficient customs clearance to a wide array of versatile transportation modes. In addition, we offer multiple e-commerce software solutions that empower your business for success in today's highly competitive landscape. All our endeavors are driven by a strong focus on sustainability and ensuring a brighter future.</p>
                                    <button type="submit" className="btn-primary btn mt-4 py-3 px-4">
                                        <span className="d-flex align-items-center justify-content-center text-uppercase">
                                            Take My Order
                                            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 mb-5 cus-our-mission">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100 h-100 position-relative ">
                                <img className="w-100 img-fluid cover" src="/images/our-mission.jpg" width="500" height="500" alt="" />
                                <div className="w-100 position-absolute top-50 start-50 translate-middle py-5 px-2 text-center">
                                    <h2 className="m-0 text-uppercase text-white">Mission</h2>
                                    <p className="m-0 pt-4 text-white">Our mission is simple: wholeheartedly serving our customers by simplifying modern logistics <br /> complexities, ensuring timely deliveries, and promoting sustainability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 cus-client-testimonials">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 ms-auto py-3">
                            <div className="testimonial-sec overflow-hidden">
                                <h3 className="text-white text-uppercase pb-4 mb-4">Testimonials</h3>
                                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="2000">
                                            <div className="carousel-caption">
                                                <p className="text-white">"RRA has been our logistics partner for over adecade, and they continue to exceed our expectations. Their commitment toreliability and safety is unmatched. Whether it's a local delivery or a complexcross-country shipment, they handle every aspect with precision. RRA Group hastruly become an integral part of our supply chain, contributing significantlyto our success. We couldn't ask for a better logistics partner."</p>
                                                <h6 className="m-0 text-white">John Smith</h6>
                                                <span className="text-white">CEO, Smith Electronics Inc.</span>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="4000">
                                            <div className="carousel-caption">
                                                <p className="text-white">"RRA has been our logistics partner for over adecade, and they continue to exceed our expectations. Their commitment toreliability and safety is unmatched. Whether it's a local delivery or a complexcross-country shipment, they handle every aspect with precision. RRA Group hastruly become an integral part of our supply chain, contributing significantlyto our success. We couldn't ask for a better logistics partner."</p>
                                                <h6 className="m-0 text-white">John Smith</h6>
                                                <span className="text-white">CEO, Smith Electronics Inc.</span>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="6000">
                                            <div className="carousel-caption">
                                                <p className="text-white">"RRA has been our logistics partner for over adecade, and they continue to exceed our expectations. Their commitment toreliability and safety is unmatched. Whether it's a local delivery or a complexcross-country shipment, they handle every aspect with precision. RRA Group hastruly become an integral part of our supply chain, contributing significantlyto our success. We couldn't ask for a better logistics partner."</p>
                                                <h6 className="m-0 text-white">John Smith</h6>
                                                <span className="text-white">CEO, Smith Electronics Inc.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <rect width="40" height="40" fill="white" fill-opacity="0.1" />
                                            <path d="M14.7855 18.7144L21.4905 11.8182L19.7227 10L10 20.0001L19.7227 30L21.4905 28.1818L14.7855 21.2857H30V18.7144H14.7855Z" fill="white" />
                                        </svg>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <rect width="40" height="40" fill="white" fill-opacity="0.1" />
                                            <path d="M25.2145 18.7144L18.5095 11.8182L20.2773 10L30 20.0001L20.2773 30L18.5095 28.1818L25.2145 21.2857H10V18.7144H25.2145Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="quote-mark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="202" height="176" viewBox="0 0 202 176" fill="none">
                                        <path d="M196.594 67.624C207.025 78.6973 212.626 91.125 212.626 111.271C212.626 146.702 187.754 178.466 151.567 194.165L142.528 180.217C176.298 161.945 182.897 138.246 185.536 123.302C180.099 126.114 172.981 127.102 166.004 126.456C147.734 124.762 133.335 109.764 133.335 91.125C133.335 71.5534 149.201 55.6875 168.773 55.6875C179.638 55.6875 190.027 60.6533 196.594 67.624ZM95.3443 67.624C105.775 78.6973 111.376 91.125 111.376 111.271C111.376 146.702 86.5042 178.466 50.3166 194.165L41.2781 180.217C75.0474 161.945 81.6475 138.246 84.2856 123.302C78.8485 126.114 71.7311 127.102 64.7536 126.456C46.4844 124.762 32.0859 109.764 32.0859 91.125C32.0859 71.5534 47.9518 55.6875 67.5234 55.6875C78.3881 55.6875 88.7777 60.6533 95.3443 67.624Z" fill="white" fill-opacity="0.1" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default About
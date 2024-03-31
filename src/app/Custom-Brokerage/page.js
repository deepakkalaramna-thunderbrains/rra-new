'use client'

import Footer from "../Footer/footer"
import dynamic from "next/dynamic"

function CustomBrokerage(){
    const Header = dynamic(() => import("../Header/header.js"), {
        ssr: false,
    });
    return <>
    <Header/>
    {/* <!-- Hero Section Start --> */}
    <section class="cus-hero-sec">
        <div class="row">
            <div class="col-md-12">
                <div class="w-100 h-100 position-relative">
                    <img class="w-100 img-fluid cover" src="/images/hero-CUSTOM-BROKERAGE.jpg" alt="" />
                    <h1 class="w-100 m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white">CUSTOM BROKERAGE</h1>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hero Section Ends -->

    <!-- About Contents Section Start --> */}
    <section class="py-5 cus-about-contents">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-9 mx-auto py-5">
                    <h2 class="m-0 text-center text-uppercase">Our custom brokerage services are tailored to your unique needs</h2>
                </div>
                <div class="col-md-11 mx-auto pt-3">
                    <div class="row align-items-center">
                        <div class="col-lg-6 px-5">
                            <img class="w-100 img-fluid cover" src="/images/brokerage-services.jpg" alt="" />
                        </div>
                        <div class="col-lg-6 px-5">
                            <h4 class="mb-3">What may seem easy at first can quickly become a complex challenge without the right customs brokerage partner.</h4>
                            <p>At RRA, we bring extensive experience to the table. Our custom brokerage services are tailored to your unique needs, whether it involves managing customs clearance, ensuring regulatory compliance, or optimizing duty and tax assessments. We specialize in both Canadian and U.S. customs, providing seamless solutions that keep your supply chain moving efficiently.</p>
                            <button type="submit" class="btn btn-primary btn mt-4">
                                <span class="d-flex align-items-center justify-content-center">
                                    Take Me In
                                    <svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- About Contents Section Ends -->

    <!-- Frequently Asked Questions Start --> */}
    <section class="py-5 cus-faq-sec">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center text-uppercase">Frequently Asked Questions</h2>
                </div>
                <div class="col-md-9 mx-auto my-5">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What documents do I need for international shipping?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>You will require various documents, including commercial invoices, packing lists, bills of lading, certificates of origin, and import/export permits. The specific paperwork depends on the destination country's regulations. And we can help you with all of those documents.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What is cargo insurance, and do I need it?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Can you manage customs clearance and duties for international shipments at RRA?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
}

export default CustomBrokerage
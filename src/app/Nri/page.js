import Header from "../Header/header";
import Footer from "../Footer/footer";

function Nri() {
  return (
  <>
    <Header />
    {/* <!-- Hero Section Start --> */}
    <section className="cus-hero-sec">
      <div className="row">
        <div className="col-md-12">
          <div className="w-100 h-100 position-relative">
            <img
              className="w-100 img-fluid cover"
              src="/images/hero-NRI.jpg"
              alt=""
            />
            <h1 className="w-100 m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white">
              N.R.I <br />
              (Non-Resident Importer) <br /> Program
            </h1>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Hero Section Ends -->

    <!-- Contents Section Start --> */}
    <section className="py-5 cus-experience-rra">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 mx-auto py-5">
            <div className="row align-items-center">
              <div className="col-md-6 px-5">
                <h4 className="mb-3">
                  U.S. firms aspiring to reach Canadian markets must grasp the
                  Non-Resident Importer (NRI) program's nuances.
                </h4>
                <p>
                  This is a specific program in Canada that allows non-resident
                  individuals or companies especially based in the U.S to act as
                  importers for goods into Canada. This program streamlines the
                  importation process and helps businesses outside Canada sell
                  their products to Canadian customers more easily.
                </p>
                <button type="submit" className="btn btn-primary btn-lg mt-4">
                  <span className="d-flex align-items-center justify-content-center">
                    Contact Us
                    <svg
                      className="ms-3"
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
              <div className="col-md-6 px-5">
                <img
                  className="w-100 img-fluid cover"
                  src="/images/US-firms-aspiring.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Contents Section Ends -->

   <!-- Contents Section Start --> */}
    <section className="py-5 cus-experience-rra bg-secondary-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto py-5">
            <div className="row align-items-center">
              <div className="col-md-6 px-5">
                <img
                  className="w-100 img-fluid cover"
                  src="/images/seamless-cross-border.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6 px-5">
                <h2 className="mb-3 text-uppercase text-white">
                  Seamless Cross-Border Solutions
                </h2>
                <p className="text-white">
                  We streamline the logistics process for U.S.-based companies,
                  reducing the complexities associated with cross-border trade.
                </p>
                <p className="text-white">
                  We are a reliable and efficient team for custom clearance,
                  documentation, and trade advice specific to Canadian
                  regulations.
                </p>
                <p className="text-white">
                  At RRA, we help you explore cost-effective shipping options,
                  duty minimization, and trade facilitation to enhance your
                  bottom line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Contents Section Ends -->

    <!-- Frequently Asked Questions Start --> */}
    <section className="py-5 mt-5 cus-faq-sec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-uppercase">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-md-9 mx-auto my-5">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Can RRA assist businesses in registering for a Canadian
                    import number and provide support with customs clearance in
                    Canada?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Yes, we do. We help businesses obtain a Canadian import
                      number and navigate the customs clearance process
                      seamlessly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Does RRA assist businesses as GST registrants in Canada?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Does RRA offer support in GST filing with the Canadian
                    government on various schedules, depending on total
                    revenues?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Frequently Asked Questions Ends --> */}

    <Footer />
  </>);
}

export default Nri;

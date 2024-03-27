"use client"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/slick-carousel/slick/slick.css'
import Link from 'next/link';
// import "../../../node_modules/bootstrap/dist/js/bootstrap.js"


export default function Header() {
    return (
        <header>
            <h1>This is a header</h1>
        {/* <div class="top-bar bg-secondary-dark">
            <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                <ul class="list-unstyled m-0 mx-3 d-flex align-items-center p-2 cus-social-media">
                    <li class="mb-0">
                        <a href="https://www.facebook.com/people/RRA-Group-Inc/61557350933003/">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                        </a>
                    </li>
                    <li class="mb-0 ms-3">
                        <a href="https://www.instagram.com/rragroupff/">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
                        </a>
                    </li>
                    <li class="mb-0 ms-3">
                        <a href="http://www.linkedin.com/company/rragroupca">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                        </a>
                    </li>
                    <li class="mb-0 ms-3">
                        <a href="#">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path></svg>
                        </a>
                    </li>
                </ul>
                <ul class="list-unstyled m-0 d-flex align-items-center top-bar-menus">
                    <li class="top-bar-contact">
                        <a href="tel:8883168287" class="text-white text-uppercase">
                            <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 13.6833V16.6301C17.5 17.0676 17.1617 17.4306 16.7254 17.4614C16.3609 17.4872 16.0636 17.5 15.8333 17.5C8.4695 17.5 2.5 11.5305 2.5 4.16667C2.5 3.93642 2.51288 3.63906 2.53863 3.27458C2.56948 2.83823 2.93245 2.5 3.36988 2.5H6.31675C6.53065 2.5 6.7098 2.66202 6.73127 2.87483C6.75056 3.06589 6.76848 3.21928 6.78506 3.33502C6.95362 4.51227 7.29794 5.6328 7.79058 6.66919C7.86966 6.83554 7.81809 7.03466 7.66821 7.14172L5.86962 8.4265C6.9646 10.9843 9.01575 13.0354 11.5735 14.1304L12.8559 12.3349C12.9643 12.1832 13.1658 12.1311 13.3342 12.211C14.3705 12.7032 15.4909 13.0472 16.668 13.2153C16.783 13.2318 16.9354 13.2496 17.1252 13.2687C17.338 13.2902 17.5 13.4694 17.5 13.6833Z" fill="white"/>
                            </svg>
                           (+1) 888.316.8287
                        </a>
                    </li>
                    <li class="top-bar-carrers">
                        <a href="#" class="text-white text-uppercase">Carrers</a>
                    </li>
                    <li class="top-bar-get-quote">
                        <a href="#" class="text-white text-uppercase">Get a Quote</a>
                    </li>
                </ul>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="/images/logo.svg" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/About">About Us</a>
                        </li>
                        <li class="nav-item position-relative">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" role="button" aria-expanded="false">Freight Forwarding</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="/FreightServices">
                                        Freight Services
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.4765 9.16658L9.0065 4.69657L10.185 3.51807L16.6668 9.99992L10.185 16.4817L9.0065 15.3032L13.4765 10.8332H3.3335V9.16658H13.4765Z" fill="#FE7C04"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/ShipmentTracking">
                                        SHIPMENT TRACKING
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.4765 9.16658L9.0065 4.69657L10.185 3.51807L16.6668 9.99992L10.185 16.4817L9.0065 15.3032L13.4765 10.8332H3.3335V9.16658H13.4765Z" fill="#FE7C04"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/NoMiniMax">
                                        NO MINI-MAX WEIGHT LIMIT
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.4765 9.16658L9.0065 4.69657L10.185 3.51807L16.6668 9.99992L10.185 16.4817L9.0065 15.3032L13.4765 10.8332H3.3335V9.16658H13.4765Z" fill="#FE7C04"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/TradeShowFreight">
                                        TRADE SHOW FREIGHT
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.4765 9.16658L9.0065 4.69657L10.185 3.51807L16.6668 9.99992L10.185 16.4817L9.0065 15.3032L13.4765 10.8332H3.3335V9.16658H13.4765Z" fill="#FE7C04"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item position-relative">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" role="button" aria-expanded="false">Custom Brokerage</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="/Canada-Customs">
                                        Canada Customs
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.4765 9.16658L9.0065 4.69657L10.185 3.51807L16.6668 9.99992L10.185 16.4817L9.0065 15.3032L13.4765 10.8332H3.3335V9.16658H13.4765Z" fill="#FE7C04"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/UsCustoms">
                                        Us Customs
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.4765 9.16658L9.0065 4.69657L10.185 3.51807L16.6668 9.99992L10.185 16.4817L9.0065 15.3032L13.4765 10.8332H3.3335V9.16658H13.4765Z" fill="#FE7C04"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/Duty-Drawbacks">
                                        DUTY DRAWBACKS
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.4765 9.16658L9.0065 4.69657L10.185 3.51807L16.6668 9.99992L10.185 16.4817L9.0065 15.3032L13.4765 10.8332H3.3335V9.16658H13.4765Z" fill="#FE7C04"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/Nri">
                                        N.R.I Program
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.4765 9.16658L9.0065 4.69657L10.185 3.51807L16.6668 9.99992L10.185 16.4817L9.0065 15.3032L13.4765 10.8332H3.3335V9.16658H13.4765Z" fill="#FE7C04"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Warehousing">Warehousing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/TradeComplianceAdvisory">TRADE COMPLIANCE ADVISORY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
    </header>
    )
}
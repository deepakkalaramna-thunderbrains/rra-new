import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/slick-carousel/slick/slick.css'
// import dynamic from 'next/dynamic';
// import Footer from "../Footer/footer";
import '../app/styles/breakpoints.css'
import '../app/styles/custom.css'
import '../app/styles/index.css'
import '../app/styles/variables.css'

import Head from "next/head";
import Script from 'next/script'
import Link from 'next/link'
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "./Footer/footer";
import Header from "./Header/header.js";

export const metadata = {
  title: "RRA Group",
  description:
    "Explore our website to learn more about our logistics services and discover how RRA Group can solve customer problems, address needs, and provide unique benefits. Thank you for choosing RRA Group. We look forward to serving you and being a part of your success story.",
  keywords:
    "RRA Group, Logistics, One Stop Solution, Best Logistics Services, Best Service, Containers",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <Link href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" rel="stylesheet" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" /> 
      <Script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" /> 
      <Header />
      {children}
      <Footer />

      <GoogleAnalytics gaId="G-8Y4Y5DLM5E" />
    </>
  );
}

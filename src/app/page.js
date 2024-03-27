// 'use client'

import RootLayout from './layout.js';
import './styles/index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/slick-carousel/slick/slick.css'
// import Header from './Header/header';
import Footer from './Footer/footer';
import Main from './Main/main.jsx';
import { GoogleAnalytics } from '@next/third-parties/google'
import dynamic from 'next/dynamic.js';

export default function Home() {
  const Header = dynamic(() => import("./Header/header.js"), {
    ssr: false,
  });
  return (
    <RootLayout>
      <div>
        {/* Your page content goes here */}
        <Header/>
        {/* header section ends here */}
        <Main/>
        <Footer/>
        {/* footer section ends */}
      </div>
    </RootLayout>
  );
}

// 'use client'

import RootLayout from './layout.js';
import './styles/index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/slick-carousel/slick/slick.css'
import Main from './Main/main.jsx';

export default function Home() {
  return (
    <RootLayout>
        <Main/>
    </RootLayout>
  );
}

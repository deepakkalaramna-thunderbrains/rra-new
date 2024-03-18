import RootLayout from './layout.js'; // Assuming `RootLayout` is defined in `layout.js`

export default function Home() {
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

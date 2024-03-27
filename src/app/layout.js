import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import dynamic from "next/dynamic.js";
import Footer from "./Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RRA Group",
  description:
    "Explore our website to learn more about our logistics services and discover how RRA Group can solve customer problems, address needs, and provide unique benefits. Thank you for choosing RRA Group. We look forward to serving you and being a part of your success story.",
  keywords:
    "RRA Group, Logistics, One Stop Solution, Best Logistics Services, Best Service, Containers",
};
const Header = dynamic(() => import("./Header/header.js"), {
  ssr: false,
});
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <div>
            <Header />
            <>
            {children}
            </>
            <Footer />
            </div>
        </body>
      </html>
      <GoogleAnalytics gaId="G-8Y4Y5DLM5E" />
    </>
  );
}

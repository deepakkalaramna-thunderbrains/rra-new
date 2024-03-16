import { Inter } from "next/font/google";
import styles from "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RRA Group Main",
  description: "Generated by create next app",
};

export default function MainLayout({ children }) {
  return (
    <>
      <main className={styles.main}>
        <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
      </main>
    </>
  );
}

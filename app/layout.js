import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import "./globals.css";

export const metadata = {
  title: "Home | PortFolio",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://iili.io/KO6bTlI.jpg"
          type="image/x-icon"
          sizes="256x256"
        />
      </head>
      <body
        className={`dark:bg-[#1f1f1f] dark:text-[#ffffffa3] bg-white text-[#0c0407]`}
      >
        <Navbar />
        <section className="main-wrapper">
          {" "}
          <div className="global-wrapper">{children}</div>
        </section>
        <Footer />
      </body>
    </html>
  );
}

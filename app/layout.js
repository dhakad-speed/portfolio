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
          href="https://ik.imagekit.io/dhakadspeed/WhatsApp%20Image%202025-10-13%20at%203.44.35%20PM.jpeg?updatedAt=1760431779980&tr=c-at_least,w-40,h-40,r-max"
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

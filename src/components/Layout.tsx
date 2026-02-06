import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/global.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Nature Credits - From Local Forests to High-Integrity Nature Credits
        </title>
        <meta
          name="description"
          content="We partner with forest owners to design, implement, and certify local-for-local nature credits. Our biodiversity projects strengthen ecosystems, reward landowners, and unlock new revenue streams using AI and remote sensing."
        />
        <meta
          name="keywords"
          content="nature credits, biodiversity credits, forest conservation, carbon credits, ecosystem services, MRV platform, AI monitoring, remote sensing, sustainable forestry, nature-positive, EU standards"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          property="og:title"
          content="Nature Credits - From Local Forests to High-Integrity Nature Credits"
        />
        <meta
          property="og:description"
          content="We partner with forest owners to design, implement, and certify local-for-local nature credits. Our biodiversity projects strengthen ecosystems, reward landowners, and unlock new revenue streams."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://naturecredits.earth" />
        <meta
          property="og:image"
          content="https://naturecredits.earth/design/02-Description_bg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nature Credits - From Local Forests to High-Integrity Nature Credits"
        />
        <meta
          name="twitter:description"
          content="We partner with forest owners to design, implement, and certify local-for-local nature credits. Our biodiversity projects strengthen ecosystems and unlock new revenue streams."
        />
        <meta
          name="twitter:image"
          content="https://naturecredits.earth/design/02-Description_bg.jpg"
        />
        <link rel="canonical" href="https://naturecredits.earth" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#A8C95F" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

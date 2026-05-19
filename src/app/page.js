import './globals.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Trust from "./components/Trust";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Quote from "./components/Quote";
import Coverage from "./components/Coverage";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Ticker />
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <Workflow />
      <Quote />
      <Coverage />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
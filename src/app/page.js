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
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Ticker />
      <div className="wrap">
        <Navbar />
        <Hero />
      </div>
      <Reveal>
        <Trust />
      </Reveal>
      <Reveal delay={80}>
        <Features />
      </Reveal>
      <Reveal delay={80}>
        <Workflow />
      </Reveal>
      <Reveal>
        <Quote />
      </Reveal>
      <Reveal delay={80}>
        <Coverage />
      </Reveal>
      <Reveal delay={80}>
        <Pricing />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
      <Footer />
    </>
  );
}

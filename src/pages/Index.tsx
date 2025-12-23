import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ruchika P | Computer Science Student & AI Enthusiast</title>
        <meta 
          name="description" 
          content="Portfolio of Ruchika P - Computer Science Engineering student passionate about AI, automation, and building innovative technology solutions. View projects, skills, and achievements." 
        />
        <meta name="keywords" content="Ruchika P, Computer Science, AI, Machine Learning, Java Developer, Portfolio, Software Engineer" />
        <meta property="og:title" content="Ruchika P | Computer Science Student & AI Enthusiast" />
        <meta property="og:description" content="Explore the portfolio of Ruchika P - showcasing AI projects, technical skills, and academic achievements." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ruchikap.dev" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
    </>
  );
};

export default Index;

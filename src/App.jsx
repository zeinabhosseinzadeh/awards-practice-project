import About from "./Component/About";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Features from "./Component/Features";
import Story from "./Component/Story";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import AnimatedTitle from "./Component/AnimatedTitle";
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <AnimatedTitle />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
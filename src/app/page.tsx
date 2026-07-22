import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { ScrollToTop } from "@/src/components/ScrollToTop";
import { Hero } from "@/src/components/home/Hero";
import { Stats } from "@/src/components/home/Stats";
import { Cooperation } from "@/src/components/home/Cooperation";
import { GitJournal } from "@/src/components/home/GitJournal";
import { Services } from "@/src/components/home/Services";
import { Experience } from "@/src/components/home/Experience";
import { Education } from "@/src/components/home/Education";
import { Projects } from "@/src/components/home/Projects";
import { Skills } from "@/src/components/home/Skills";
import { Testimonials } from "@/src/components/home/Testimonials";
import { Pricing } from "@/src/components/home/Pricing";
import { Blog } from "@/src/components/home/Blog";
import { Contact } from "@/src/components/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-6">
        <div className="min-h-screen fixed inset-0 screen-bg"></div>
        <div className="relative z-20 flex flex-col gap-6.5 ">
          <Hero />
          <Stats />
          {/* <div className="grid grid-cols-1 gap-6.5 lg:grid-cols-2">
            <Cooperation />
            <GitJournal />
          </div> */}
          <Services />
          {/* <Experience /> */}
          {/* <Education /> */}
          {/* <Projects /> */}
          {/* <Skills /> */}
         <Testimonials />
          <Pricing />
          {/* <Blog /> */}
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

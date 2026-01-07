import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ImageSection from "./components/ImageSection";
import Feedback from "./components/Feedback";
import FacultySlider from "./components/FacultySlider";
import Partners from "./components/Partners";
import Faq from "./components/Faq";
import CoursesCards from "./components/CoursesCards";
import AboutSeart from "./components/AboutSeart";
import CoursesCardsTwo from "./components/CoursesCardsTwo";
import CareerSection from "./components/CareerSection";
import BlogSection from "./components/BlogSection";
import CampusSection from "./components/CampusSection";
import CampusInsights from "./components/CampusInsights";
import WorldWide from "./components/WorldwideSections";
import EnrollSection from "./components/EnrollSection";
export default function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Partners />
      <ContactSection />
      <AboutSeart />
      <CoursesCards />
      <CoursesCardsTwo />
      <EnrollSection/>
      <CampusSection />
      <CareerSection />
      <CampusInsights />
      <BlogSection />
      <ImageSection />
      <WorldWide />
      <Testimonials />
      <FacultySlider />
      <Feedback />
      <Faq />
      <Footer />
    </>
  );
}

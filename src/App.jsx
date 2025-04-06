import HeroSection from "./components/banner/HeroSection"
import BlogGrid from "./components/blog/BlogGrid"
import Brands from "./components/brands/Brands"
import Footer from "./components/footer/Footer"
import Header from "./components/nav/Header"
import ServicesSection from "./components/service/ServicesSection"
import CompanyStats from "./components/states/CompanyStats"
import TestimonialQuote from "./components/testimonial/TestimonialQuote"

function App() {
  

  return (
    <>
    <Header/>
    <HeroSection/>
    <ServicesSection/>
    <CompanyStats/>
    <BlogGrid/>
    <Brands/>
    <TestimonialQuote/>
    <Footer/>
    </>
  )
}

export default App

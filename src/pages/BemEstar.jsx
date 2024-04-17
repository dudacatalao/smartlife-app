// import Footer from "../components/Footer"
import Footer from "../components/Footer"
import FourthBlogSection from "../components/FourthBlogSection"
import Navbar from "../components/Navbar"
import SecondBlogSection from "../components/SecondBlogSection"
import ThirdBlogSection from "../components/ThirdBlogSection"
import '../styles/index.css'


export default function BemEstar(){
  return(
    <div>
      <Navbar/>
      <ThirdBlogSection/>
      <SecondBlogSection/>
      <FourthBlogSection/>
      <Footer/>

    </div>
  )
}
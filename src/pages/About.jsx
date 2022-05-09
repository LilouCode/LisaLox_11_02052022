import Banner from "../components/Banner"
import banenrAbout from '../assets/bannerAbout.png'
function About() {
    return (
      <div>
        <Banner>
          <img src={banenrAbout} alt="paysage nature" />
        </Banner>
      </div>
    )
  }
  
  export default About
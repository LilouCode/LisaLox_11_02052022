import Banner from "../components/Banner"
import Grid from "../components/Grid"
import bannerHome from '../assets/bannerHome.png'


function Home() {
    return (
      <div>
        <Banner>
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={bannerHome} alt="paysage nature" />
        </Banner>
        <Grid/>
      </div>
    )
  }
  
  export default Home
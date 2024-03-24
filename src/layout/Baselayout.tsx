import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import FooterEnd from '../components/footer/FooterEnd'
const Baselayout = () => {
  return (
    <div>
        <Header/>
        <div>
        <Outlet/>
        </div>
        <Footer/>
        <FooterEnd/>
    </div>
  )
}

export default Baselayout
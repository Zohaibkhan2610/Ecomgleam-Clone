import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import Footer from './Components/section/Footer';
import './section.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import AboutMain from './Components/About/AboutMain';
import Warehousing from './Components/Our Services/3PL and WhereHouses/3pl and Warehousing';
import AmazonWholesale from './Components/Our Services/Amazon wholeSale/Amazon Wholesale';
import AmazonMangment from './Components/Our Services/Amazon Full Mangment/Amazon Mangment';
import ArbitrageAndManagenebt from './Components/Our Services/Arbitrage And Management/Arbitrage and Managenebt';
import Contact from './Components/Contact us/Contact';
function App() {
  useEffect(() => {
    AOS.init({
   
    });
  }, []);
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/About' Component={AboutMain}/>
        <Route path='/amazon-full-account-management-services' Component={AmazonMangment}/>
        <Route path='/online-arbitrage-and-retail-services' Component={ArbitrageAndManagenebt}/>
        <Route path='/amazon-wholesale-fba-services' Component={AmazonWholesale}/>
        <Route path='/3pl-and-warehousing-services' Component={Warehousing}/>
        <Route path='/Contact' Component={Contact}/>

      </Routes>
      <Footer/>
      </Router>
    </>
      
  );
}

export default App;

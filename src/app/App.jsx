import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Header from '../components/Header/Header'
import Hero from "../components/Hero/Hero.jsx";
import Features from "../components/Features/Features.jsx";
import Pricing from "../components/Pricing/Pricing.jsx";
import Map from "../components/Map/Map.jsx";
import Review from "../components/Review/Review.jsx";

function App() {

  return (
      <div className="container">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Map />
        <Review />
      </div>
  )
}

export default App;
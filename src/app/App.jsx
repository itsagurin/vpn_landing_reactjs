import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Header from '../components/Header/Header'
import Hero from "../components/Hero/Hero.jsx";
import Features from "../components/Features/Features.jsx";

function App() {

  return (
      <div className="container">
        <Header />
        <Hero />
        <Features />
      </div>
  )
}

export default App;
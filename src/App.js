
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { About } from "./components/Aboutus";
import {Contact} from "./components/Contact us";
import { Footer } from "./components/Footer";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

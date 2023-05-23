import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Details from './components/Details';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {


  return (
    <div className="App" >
    <Router>
      <Navbar />
      <Routes  basename={process.env.PUBLIC_URL}>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/item/:id' element={<Details/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
   </Router>
    </div>
  );
}

export default App;

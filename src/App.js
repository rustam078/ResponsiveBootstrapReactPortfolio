import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './header/Navbar';
import Test from './header/Test.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Review from './components/Review.js';
import PageOutlet from './components/PageOutlet.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TableDetailsComponent from './components/TableDetailsComponent.js';
 
function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div style={{ paddingTop: '125px' }}>
          <Routes>
            <Route element={<PageOutlet />}>
              <Route path='' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/test' element={<Test />} />
              <Route path='/review' element={<Review />} />
              <Route path='/table' element={<TableDetailsComponent />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

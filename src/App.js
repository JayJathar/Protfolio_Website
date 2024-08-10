import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Home from './containers/home';
import About from './containers/about/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Navbar from './components/navBar';

import Work from './components/Work/Work';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
   
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/work' element={<Work />}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;

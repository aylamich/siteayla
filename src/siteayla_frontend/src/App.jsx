import { useState } from 'react';
import { siteayla_backend } from 'declarations/siteayla_backend';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import About from './pages/about';
import Social from './pages/social';
import Likes from './pages/likes';

function App() {

  return (           
    <Router>
      <Routes>      
        <Route path="/" element={<Index/>} />    
        <Route path="/about/" element={<About/>} />
        <Route path="/social/" element={<Social/>} />
        <Route path="/likes/" element={<Likes/>} />                          
      </Routes>                  
    </Router>

  );
};

export default App;
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import BlogPost from './pages/BlogPost';
import Blog from './pages/Blog';
import Homepage from './pages/Homepage';
import { GlobalStyle } from './globalStyles';
import ScrollToTop from './scrollToTop';
import Contact from './pages/Contact';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar background="rgb(10,10,10)"/>
        <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/blog/:slug" element={<BlogPost />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>

          </Routes> 
          <Footer />
    </Router>
  );
}

export default App;

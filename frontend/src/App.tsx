import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
const BlogPost = React.lazy(() => import("./pages/BlogPost"))
const Blog = React.lazy(() => import("./pages/Blog"))
const Homepage = React.lazy(() => import("./pages/Homepage"))
const Contact = React.lazy(() => import("./pages/Contact"))
const Login = React.lazy(() => import("./pages/Login"))
const Register = React.lazy(() => import("./pages/Register"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
import { GlobalStyle } from './globalStyles';
import ScrollToTop from './scrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByToken} from './redux/slices/auth';
import { RootState } from './redux/store';
import Loading from './components/Loading';


const App = () => {
  const dispatch  = useDispatch();
  const [isAuthentificated, setIsAuthentificated] = useState(false)
  const checkIfAuthentificated = () => {
    const token = localStorage.token;
    if(token){
      dispatch(getUserByToken(token))
    }
  }
  const auth = useSelector((state:RootState)=> state.auth)
  useEffect(() => {
    checkIfAuthentificated()
  },[])
  useEffect(() => {
    setIsAuthentificated(auth.result ? true : false);
    
    console.log(auth)
  }, [auth])
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      {isAuthentificated && (
        <Navbar background="rgb(10,10,10)" image={auth.result?.imageURL}/>
      )}
      {!isAuthentificated && (
        <Navbar background="rgb(10,10,10)" />

      )}
       <React.Suspense fallback={<Loading />}>
        <Routes>
         
              <Route path="/" element={<Homepage />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/blog/:slug" element={<BlogPost />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="*" element={<NotFound />} />
       
        </Routes> 
        </React.Suspense>
        <Footer />
    </Router>
  );
}

export default App;

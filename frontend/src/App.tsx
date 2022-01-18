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
const Profile = React.lazy(() => import("./pages/Profile"))
import { GlobalStyle } from './globalStyles';
import ScrollToTop from './scrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByToken} from './redux/slices/auth';
import { RootState } from './redux/store';
import Loading from './components/Loading';
import PrivateRoute from './utils/PrivateRoute';
import { NavBlack } from './utils/colors';


const App = () => {
  const dispatch  = useDispatch();
  const auth = useSelector((state:RootState)=> state.auth)
  useEffect(() => {
    dispatch(getUserByToken())
  },[])

  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      {auth.isAuthentificated && !auth.loading && (
        <Navbar background={NavBlack} image={auth.result?.imageURL}/>
      )}
      {!auth.isAuthentificated && (
        <Navbar background={NavBlack} />

      )}
       <React.Suspense fallback={<Loading />}>
        <Routes>
         
              <Route path="/" element={<Homepage />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/blog/:slug" element={<BlogPost />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/profile" element={<PrivateRoute>
                                                <Profile />
                                              </PrivateRoute>}/>
              <Route path="*" element={<NotFound />} />
       
        </Routes> 
        </React.Suspense>
        <Footer />
    </Router>
  );
}

export default App;

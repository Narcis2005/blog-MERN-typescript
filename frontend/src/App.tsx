import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Homepage = React.lazy(() => import("./pages/Homepage"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Profile = React.lazy(() => import("./pages/Profile"));
const GetPostsByTag = React.lazy(() => import("./pages/GetPostsByTag"));
const GetPostsByCategory = React.lazy(() => import("./pages/GetPostsByCategory"));
const AddPost = React.lazy(() => import("./pages/AddPost"));
const SpecifyTag = React.lazy(() => import("./pages/GetPostsByTag/SpecifyTag"));
const SpecifyCategory = React.lazy(() => import("./pages/GetPostsByCategory/SpecifyCategory"));
import { GlobalStyle } from "./globalStyles";
import ScrollToTop from "./utils/scrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./index";
import Loading from "./components/Loading";
import PrivateRoute from "./utils/PrivateRoute";
import { NavBlack } from "./utils/colors";
import SetAuthToken from "./utils/SetAuthToken";
import { HelmetProvider } from "react-helmet-async";
import { getUserByToken } from "./redux/slices/auth";
const App = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    //Every time the user state changes (logges in or out) the token will be added or deleted
    useEffect(() => {
        SetAuthToken();
    }, [auth]);
    useEffect(() => {
        dispatch(getUserByToken());
    }, []);
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <GlobalStyle />

                {auth.status === "success" && <Navbar background={NavBlack} image={auth.result?.imageURL} />}
                {auth.status !== "success" && <Navbar background={NavBlack} />}
                <React.Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route
                            path="/blog/add"
                            element={
                                <PrivateRoute>
                                    <AddPost />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/blog/tag" element={<SpecifyTag />} />
                        <Route path="/blog/tag/:tag" element={<GetPostsByTag />} />
                        <Route path="/blog/category" element={<SpecifyCategory />} />
                        <Route path="/blog/category/:category" element={<GetPostsByCategory />} />
                        <Route path="/blog/post/:slug" element={<BlogPost />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <Profile />
                                </PrivateRoute>
                            }
                        />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </React.Suspense>
                <Footer />
            </Router>
        </HelmetProvider>
    );
};

export default App;

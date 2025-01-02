import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Flex from "../components/Flex";
import About from "../components/About";
import Footer from "../components/Footer";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import RecommendedJobs from "../pages/dashboard/RecommendedJobs";
import Video from "../components/Video";
import Faq from "../components/Faq";
import Loader from "../components/Loader";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactus from "../components/Contactus";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-white">
                <Header />
                <Hero />
                <Flex />
                <About />
                <Video />
                <Faq />
                <Contactus />
                <Footer />
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <Header />
                <RecommendedJobs />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
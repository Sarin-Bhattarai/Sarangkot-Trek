import React, { useState, useEffect } from "react";
import Faqs from "./pages/Faq/Faq";
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import OurTeam from "./pages/Our-Team/ourTeam";
import Trekking from "./pages/Trekking/Trekking";
import Dashboard from "./pages/Dashboard/Dashboard";
import Services from "./pages/Social-Services/Services";
import SubRegion from "./pages/subRegion/SubRegion";
import Other from "./pages/Other/Other";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Up from "./components/upper-header/Up";

const App = () => {
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
      setTimeout(() => {
        setcompleted(true);
      }, 1000);
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span>Loading...</span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      ) : (
        <>
          <Router>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <>
                    <Up />
                    <Navbar />
                    <Home />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/trekking"
                exact
                element={
                  <>
                    <Up />
                    <Navbar />
                    <Trekking />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/trekking/subRegions"
                exact
                element={
                  <>
                    <Up />
                    <Navbar />
                    <SubRegion />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/contact"
                exact
                element={
                  <>
                    <Up />
                    <Navbar />
                    <Contact />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/ourTeam"
                exact
                element={
                  <>
                    <Up />
                    <Navbar />
                    <OurTeam />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/services"
                exact
                element={
                  <>
                    <Up />
                    <Navbar />
                    <Services />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/faq"
                exact
                element={
                  <>
                    <Up />
                    <Navbar />
                    <Faqs />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/others"
                exact
                element={
                  <>
                    <Up />
                    <Navbar />
                    <Other />
                    <Footer />
                  </>
                }
              />
              <Route path="/*" exact element={<Dashboard />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
};

export default App;

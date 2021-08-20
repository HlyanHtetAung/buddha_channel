import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import WatchVideo from "./pages/WatchVideo";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__wrapper">
          <Navbar />
          <Switch>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/watch/:id">
               <WatchVideo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

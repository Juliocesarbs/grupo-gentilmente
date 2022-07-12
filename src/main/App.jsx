import React from 'react';

import Topbar from "../components/topbar/Topbar";
import Intro from "../components/intro/Intro";
import Home from "../components/home/Home";
import AboutUs from "../components/aboutUs/AboutUs";
import OurBlog from "../components/ourBlog/OurBlog";
import Contacts from "../components/contacts/Contacts";
import Login from "../components/login/Login";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Home className="sec"/>
        <Intro className="sec"/>
        <AboutUs className="sec"/>
        <OurBlog className="sec"/>
        <Contacts className="sec"/>
        <Login/>
      </div>
    </div>
  );
}

export default App;

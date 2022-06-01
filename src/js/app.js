import React, {Component,useState,useEffect} from "react";
import ReactDOM from "react-dom";
import Form from './Form';
import AsideLeft from "./aside-left";
import AsideRight from "./aside-right";
import Footer from "./Footer";
import MenuNav from "./MenuNav";
import InfoOne from "./info";
import Logo from "./logo";
import About from "./about";
// import InfoTwo from "./infoTwo";
// import InfoThree from "./infoThree";



function App(){
  return(
    <>
    <nav className="container">

    <Logo/>
    <MenuNav/>

    </nav>

    <section id="content">
    <div class="aside">
    <AsideLeft/>
    </div>
    <div className="container">
    <InfoOne/>
    <About/>
    <Form/>
    </div>
    <div class="aside">
    <AsideRight/>
    </div>
    </section>

    <div className="container">
    <Footer id={"number"}/>
    </div>
    </>
  )
}
ReactDOM.render(<App/>,document.getElementById("app"));

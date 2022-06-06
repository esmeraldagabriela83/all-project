import React, {Component,useState,useEffect} from "react";
import ReactDOM from "react-dom";
import {Form , UsersData} from './Form';
import AsideLeft from "./aside-left";
import AsideRight from "./aside-right";
import Footer from "./Footer";
import MenuNav from "./MenuNav";
import Info from "./info";
import Logo from "./logo";
import About from "./about";
import persons from "../../data/db";
console.log("persons.users[1].id is  : " , persons.users[1].id);

function App(){
  return(
    <>
    <div id="upperPart">
    <nav className="container">
    <Logo/>
    <MenuNav/>
    </nav>
    <div class="text">Eat Healthy</div>
    </div>

    <section id="content">
    <div class="aside">
    <AsideLeft/>
    </div>
    <div className="container">
    <Info/>
    <About/>
    <Form userid={"users.id"} formTitle={"Complete form"}/>
    <UsersData/>
    </div>
    <div class="aside">
    <AsideRight/>
    </div>
    </section>

    <div className="container">
    <Footer/>
    </div>
    </>
  )
}
ReactDOM.render(<App/>,document.getElementById("app"));

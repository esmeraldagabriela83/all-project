import React from "react";


function Menu(props){
  return(
    <ul>
       <li><a href="#info" style={{marginRight:"0.5em", marginLeft:"0.5em"}}>Info</a></li>
       <li><a href="#aboutUs" style={{marginLeft:"0.5em"}}>About Us</a></li>
       <li><a href="#form" style={{marginLeft:"0.5em"}}>Contact</a></li>
   </ul>
  )
}
export default Menu;

import React, {useState , useEffect} from "react";
import Sources from "./sources";



function Footer(){

  const [showLinks , setShowLinks]=useState(false);

  const showSources=(event) =>{
    setShowLinks(!showLinks);
  }

  return(
    <section id="footer">

    {showLinks && <Sources/>}
                <button  onClick={(event) =>showSources(event)}>{showLinks ? "Hide Sources" : "Show Sources"}</button>

    </section>
  )
}
export default Footer;


///{showLinks && <Sources/>}
            // <button  onClick={(event) => {
            //          setShowLinks(!showLinks);
            //                     }}>{showLinks ? "Hide Sources" : "Show Sources"}</button>

import React, {useState} from 'react';
import BoxImage from "./BoxImage";
import BeforeAndAfter from "./before-after";
import InfoVegetables from "./vegetables-function";

const divStyle={
               display:"flex",
               alignItems:"center",
               justifyContent:"center",
               flexDirection:"column",
};
//////////////////////////////////////////
const newText=
`
Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
This book is a treatise on the theory of ethics, very popular during the Renaissance.
The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
`

///////////////////////////////////////////
function Info(props){

const [moreInfo , setMoreInfo]=useState("");

console.log("rendering from info.js");

const addInfo = (event) =>{
    setMoreInfo(newText);
  }

  return(
    <div id="info" style={divStyle} className="container">


    <BoxImage/>

    <p style={{textAlign:"center"}}>

Contrary to popular belief, Lorem Ipsum is not simply random text.
It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.

    </p>

    <button onClick={addInfo}>Find out more</button>

    <p style={{textAlign:"center" , marginBottom:"1em"}}>{moreInfo}</p>

    <BeforeAndAfter/>
    <InfoVegetables/>
    </div>
  )
}

export default Info;

//  <h3 style={{marginBottom:"1.5em" , marginTop:"-0.6em"}}>Intresting information</h3>

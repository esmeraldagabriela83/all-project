import React, {useState, useEffect} from "react";

//componenta controlata
function TextInput({type , name , id , ph , label , hasErrors , doChange }){

const [value , setValue]=useState(null);

const textHandleChange = (event) => {
  console.log("--------------------event.target.value from textHandleChange arrow function is : " , event.target.value);
  //controleaza value din input
  setValue(event.target.value);
}

// useEffect(() =>{
//   doChange(name , value);
// },[value])

  return(
    <label htmlFor={id} className={hasErrors ? "error" : (value !== null ? "valid" : null)}>{label}:
      <input type={type}
             name={name}
             id={id}
             //componenta controlata are value legat de state
              value={value !== null ? value : ""}
             placeholder={ph}
             //obligatoriu pt componenta controlata
             onChange={textHandleChange}
             onFocus={(event) =>console.log("focused " + name)}
             onBlur={(event) => doChange(name , value)}/>
    </label>
  )
}
////////////////////////////

function TextAreaInput({ name , id ,label , hasErrors , doChange}){

const [value , setValue]=useState(null);

const textAreaHandleChange = (event) => {
  console.log("------------------------------event.target.value from textAreaHandleChange arrow function is : " , event.target.value);
  //controleaza value din input
  setValue(event.target.value);
}

// useEffect(() =>{
//   doChange(name , value);
// },[value])


  return(
    <label htmlFor={id} className={hasErrors ? "error" : (value !== null ? "valid" : null)}>{label}<br></br>
    <textarea type={"textarea"}
              name={name}
              id={id}
              placeholder={label}
              value={value !== null ? value : ""}
              onChange={textAreaHandleChange}
              onBlur={(event) => doChange(name , value)}></textarea>
    </label>
  )
}



//////////////////////////

function CheckBoxInput({id , name , type , hasErrors , doChange }){

  const [checked , setChecked]=useState(null);

  const checkHandleChange = (event) => {
    console.log("checked------------------------------event.target.checked from checkHandleChange arrow function is : " , event.target.checked);
    //controleaza value din input
    setChecked(event.target.checked);
  }

  useEffect(() =>{
    doChange(name , checked);
  } , [checked])

  return(
          <label htmlFor={id}
                 className={hasErrors ? "error" : (checked !== null ? "valid" : "")}
                 >I agree with the terms and conditions<br></br>
          <input type={type} name={name}
                 id={id}
                 value="1"
                 checked={checked !== null ? checked : false}
                 onChange={checkHandleChange}/>
          </label>
  )
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export {
  TextInput , CheckBoxInput , TextAreaInput
}

import React, {useState, useEffect} from "react";
import {TextInput , CheckBoxInput , TextAreaInput} from "./Inputs";
import persons from "../../data/db";
console.log("---------persons is from db.json : " , persons);
console.log("persons.users is an array : " , persons.users);
console.log("persons.users[0] is first object from the array : " , persons.users[0]);
console.log("persons.users[0].id is  : " , persons.users[0].id);


function Form(props) {
  const {userid , formTitle}=props;
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    phone:"",
    message:"",
    usertype:null,
    age:null,
    tnc:null
   });

////////////////////////after curs 38 and 43
  const [errors,setErrors] = useState([]);
/////////////////////pt componentele unice de completat din Inputs.js curs 38
const formHandleChange= (key , value) =>{
//clonez form
const currentState={...form}
currentState[key]=value;
setForm(currentState);
}
console.log("rendering contact form");
/////////////////////pt componentele cu select option si radio curs 43
   const handleChange = (event) => {
     setForm({...form, [event.target.name]: event.target.value});
   }

   useEffect(()=>{
     console.log("form is : " , form);
   },[form])
/////////////////////////
   const handleSubmit = (event) => {
     event.preventDefault();
      const errs = [];

      const {name, username, password, email, phone, message, usertype , age,  tnc} = form;
        if(name.length < 3 || name.length > 30) {
            errs.push('name');
          }
          if(username.length < 3) {
            errs.push('username');
          }
          if(password.length < 3) {
            errs.push('password');
          }
          if(email.length < 3) {
            errs.push('email');
          }
          if(phone.length != 10) {
            errs.push('phone');
          }
          if(message.length < 3 || message.length > 255) {
            errs.push('message');
          }
          if(usertype === null) {
            errs.push('usertype');
          }
          if(age === null) {
            errs.push('age');
          }
          if(tnc === null) {
            errs.push('tnc');
          }

          let checkPass = document.getElementById('checkpassword').value;
          if(checkPass != password) {
              errs.push('checkpassword');
            }
      if(errs.length == 0) {
        fetch("http://localhost:3000/users", {method: "post", headers: {
            'Content-Type': 'application/json'}, body: JSON.stringify(form)}).
            then(response=>response.json()).
            then(result=>{console.log("result is : " , result)}).
            catch(errs=>console.log(errs))
      }
            setErrors(errs);
            console.log("errs is : " , errs);
   }

  return(
    <>
    <h3 style={{textAlign:"center", marginBottom:"1.5em",textTransform:"capitalize"}}>{formTitle}</h3>
    <form className="form" onSubmit={handleSubmit} id="form" action="esmeraldagabriela83@yahoo.com" method="POST">

     <TextInput type={"text"} name={"name"} id={"name"} placeholder={"First and second name"} label={"Name"} hasErrors={errors.includes("name")} doChange={formHandleChange}/>

     <TextInput type={"text"} name={"username"} id={"username"} placeholder={"name123"} label={"Username"} hasErrors={errors.includes("username")} doChange={formHandleChange}/>

     <TextInput type={"password"} name={"password"} id={"password"}  label={"Password"} hasErrors={errors.includes("password")} doChange={formHandleChange}/>

     <TextInput type={"password"} name={"checkpassword"} id={"checkpassword"}  label={"Check password"} hasErrors={errors.includes("checkpassword")} doChange={formHandleChange}/>

     <TextInput type={"email"} name={"email"} id={"email"} placeholder={"name@gmail.com"} label={"Email"} hasErrors={errors.includes("email")} doChange={formHandleChange}/>

     <TextInput type={"tel"} name={"phone"} id={"phone"} placeholder={"your phone"} label={"Phone"} hasErrors={errors.includes("phone")} doChange={formHandleChange}/>

     <TextAreaInput label={"message"} name={"message"} id={"message"} hasErrors={errors.includes("message")} doChange={formHandleChange}/>



      <label htmlFor="usertype" id="usertype">User type<br></br>
        <label htmlFor="basic"><p style={{textAlign:"center"}}>basic</p>
        <input type="radio" id="basic" name="usertype" value="basic" checked={form.usertype == "basic"} onChange={handleChange}/>
        </label>

        <label htmlFor="super"><p style={{textAlign:"center"}}>super</p>
        <input type="radio" id="super" name="usertype" value="super" checked={form.usertype == "super"} onChange={handleChange}/>
        </label>

        <label htmlFor="admin"><p style={{textAlign:"center"}}>admin</p>
        <input type="radio" id="admin" name="usertype" value="admin" checked={form.usertype == "admin"} onChange={handleChange}/>
        </label>
      </label><br></br>



      <label htmlFor="age">Select Age</label><br></br>
        <select name="age" id="age" onChange={handleChange} style={{margin:"0 calc(50% - 6.5em)"}}>
          <option value="">Select</option>
          <option value="junior">Junior</option>
          <option value="adult">Adult</option>
          <option value="elderly">Elderly</option>
        </select><br></br>

       <CheckBoxInput type={"checkbox"} name={"tnc"} id={"tnc"} label={"I agree with the terms and conditions"} hasErrors={errors.includes("tnc")} doChange={formHandleChange}/><br></br>

      <div id="center-button">
      <button>Submit</button>
      </div>
    </form>

    {errors.length !== 0 ? <div style={{marginTop:"1em", textAlign:"center"}}>Errors are : {errors.join(",")}</div>
                         : <div></div>}
    </>
  )
}
///////////////////////

// <label htmlFor="name">Name
// <input type="text" name="name" id="name" placeholder="First and second name" onChange={handleChange}/>
// </label>
//
//  <label htmlFor="username">Username
//    <input type="text" name="username"  id="username" placeholder="name123" onChange={handleChange}/>
//  </label>
//
//  <label htmlFor="password">Password
//    <input type="password"  name="password" id="password"  onChange={handleChange}/>
//  </label>
//
//  <label htmlFor="checkpassword">Check password
//    <input type="password"  name="checkpassword" id="checkpassword"/>
//  </label>
//
//  <label htmlFor="email">Email
//    <input type="email"  name="email"  id="email" placeholder="name@gmail.com" onChange={handleChange}/>
//  </label>
//
//  <label htmlFor="phone">Phone
//  <input type="tel"  name="phone"  id="phone" placeholder="your phone" onChange={handleChange}/>
//  </label>

// <label htmlFor="message">Message<br></br>
// <textarea name="message" id="message" placeholder="your message"></textarea>
// </label><br></br>
      //
      // <label htmlFor="tnc">I agree with the terms and conditions<br></br>
      // <input type="checkbox" name="tnc" value="1"/>
      // </label><br></br>

function UsersData(){
        return(
          <>
          <ul style={{textAlign:"center" , marginTop:"1.5em"}}>
          <li>User data is:</li>

          <li>{persons.users.map( (el,index) => {
                    return(
                      <article  key={index} style={{cursor:"pointer" , padding:"1em", margin:"1em"}}>
                      <p >Id : {el.id}</p>
                      <p >Name : {el.name}</p>
                      <p >Username : {el.username}</p>
                      <p >Password : {el.password}</p>
                      <p >Email : {el.email}</p>
                      <p >Phone : {el.phone}</p>
                      <p >Message : {el.message}</p>
                      <p >Usertype : {el.usertype}</p>
                      <p >Age : {el.age}</p>
                      </article>
                    )
                  })}</li>

          </ul>
          </>
        )
}
export {
  Form , UsersData
}

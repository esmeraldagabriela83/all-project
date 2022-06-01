import React, {useState, useEffect} from "react"

export default function Form(props) {
  const {id}=props;
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    usertype: ""
   });

////////////////////////
  const [errors,setErrors] = useState([]);
/////////////////////

   const handleChange = (event) => {
     setForm({...form, [event.target.name]: event.target.value});
   }

   useEffect(()=>{
     console.log(form);
   },[form])

   const handleSubmit = (event) => {
     event.preventDefault();
      const errs = [];

      ////////////////andrei

      const {name, username, password, email, usertype} = form;
        if(name.length < 3) {
            errs.push('name')
          }
          if(username.length < 3) {
            errs.push('username')
          }
          if(password.length < 3) {
            errs.push('password')
          }
          if(email.length < 3) {
            errs.push('email')
          }
          if(usertype.length < 3) {
            errs.push('usertype')
          }

          let checkPass = document.getElementById('checkpassword').value;
          if(checkPass != password) {
              errs.push('checkpassword');
            }
      if(errs.length == 0) {
        fetch("http://localhost:3000/users", {method: "post", headers: {
            'Content-Type': 'application/json'}, body: JSON.stringify(form)}).
            then(response=>response.json()).
            then(result=>{console.log(result)}).
            catch(errs=>console.log(errs))
      }
            setErrors(errs);
            console.log("errs is : " , errs);
   }

  return(
    <>
    <form className="form" onSubmit={handleSubmit} id="form">
      <label>Name
        <input type="text" id="name" name="name" placeholder="First and second name" onChange={handleChange}/>
      </label>

      <label>Username
        <input type="text" id="username" name="username" placeholder="name123" onChange={handleChange}/>
      </label>

      <label>Password
        <input type="password" id="password" name="password" onChange={handleChange}/>
      </label>

      <label>Check password
        <input type="password" id="checkpassword" name="checkpassword"/>
      </label>

      <label>Email
        <input type="emal" id="email" name="email" placeholder="name@gmail.com" onChange={handleChange}/>
      </label>


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
      <div id="center-button">
      <button>Submit</button>
      </div>
    </form>

    {errors.length !== 0 ? <div style={{border:"3px solid red", padding:"1em"}}>Errors are : {errors.join(",")}</div>
                         : <div></div>}


    </>
  )
}

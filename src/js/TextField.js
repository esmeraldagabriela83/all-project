import React, {useState,useEffect} from 'react';

export default function TextField(props) {
  const [selected,setSelected] = useState("");
  const [options,setOptions] = useState([]);

  const [mySrc,setMySrc] = useState("");
  const [loremIpsum,setLoremIpsum] = useState("");

  const handleChange = (event) => {

  const myindex=parseInt(event.target.value);

if(options[myindex] !== undefined){
  setSelected(event.target.value);
  console.log("event.target is " , event.target);
  console.log("options[myindex] is " , options[myindex]);

  setMySrc(options[myindex].src);
  setLoremIpsum(options[myindex].lorem);
};

  }

  useEffect(()=>{
    const time = Math.floor(5 + Math.random()*95) * 30;
    console.log("Request time:",time);

    setTimeout(()=>{
      const result = [
        {
          text:"Ginger",
          value:"ginger",
          src:"../assets/images/ginger.png",
          color:"teal",
          lorem:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
        },
        {
          text:"Onion",
          value:"onion",
          src:"../assets/images/onion.png",
          color:"gray",
          lorem:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
        },
        {
          text:"Tomatoes",
          value:"tomatoes",
          src:"../assets/images/tomatoes.png",
          color:"cornflowerblue",
          lorem:"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
          text:"Cucumbers",
          value:"cucumbers",
          src:"../assets/images/cucumbers.png",
          color:"cornflowerblue",
          lorem:"The first line of Lorem Ipsum, comes from a line in section 1.10.32."
        },
        {
          text:"Garlic",
          value:"garlic",
          src:"../assets/images/garlic.png",
          color:"cornflowerblue",
          lorem:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
        },
      ];

      setOptions(result);
    },time);

  },[])

  return(
    <>
      {/*valabil pentru jsx in HTML functioneaza altfel, vezi SELECT pe W3SCHOOLS*/}
      {options.length == 0 ? <h2 style={{textAlign:"center"}}>Loading... please wait</h2> :
        <section style={{width:"100%" , display:"flex" , alignItems:"center" , justifyContent:"center" , flexDirection:"column"}}>
          <select name="fields" id="fields" value={selected} onChange={handleChange} style={{ marginTop:"1em"}}>
              <option value={""}>Select</option>
              {options.map((el,index)=>{
                return (
                  <>
                  <option key={index} value={index}>{el.text}</option>
                  </>
                )
              })}
          </select>
          {selected !== "" &&
                   <>
                   <div style={{display:"flex" , alignItems:"center" , justifyContent:"center" , flexDirection:"column" , width:"100%"}}>
                   <p style={{textAlign:"center" , margin:"1em 0"}}>{loremIpsum}</p>
                   <img src={mySrc} alt={selected} className="select-image"/>
                   </div>
                   </>}
      </section>
     }
    </>
  )
}

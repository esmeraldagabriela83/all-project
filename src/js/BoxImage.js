import React,{useState,useEffect} from 'react';

const unhealthyFood="url(../assets/images/sweet-heart.jpg)";
const healthyFood="url(../assets/images/healthy-food.jpg)";
///////////////////////
const styleDiv={
  width:"100%",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column"
}
////////////////////////////////

export default function BoxImage(props){
  const [urlImage,setUrlImage] = useState(unhealthyFood);

  const [habit , setHabit] = useState("Unhealthy habit");

  const [colorFont , setColorFont]=useState("DimGray");
  //echivalent componentDidMount
  //useEffect(functie, []) - array gol ca al doilea parametru
  useEffect(()=>{
    const tmid = setTimeout(() => {

      setUrlImage(healthyFood);

      setHabit("Healthy habit");

      setColorFont("#262626");
    },7000)
  },[])
  return (
    <div style={styleDiv}>

    <h3 style={{color:colorFont , marginBottom:"1em" , marginTop:"-0.5em"}}>{habit}</h3>

    <div style={{backgroundImage:urlImage,
                 height:"300px",
                 marginTop:"-0.5em",
                 marginBottom:"1em",
                 boxShadow: "1.5px 1.5px 3px gray",
                 borderRadius: "0.3em",
                 backgroundRepeat:"no-repeat",
                 backgroundPosition:"center",
                 backgroundSize:"cover"}} className="image-change"></div>

    </div>
  )
}
console.log("change image in 7 seconds");

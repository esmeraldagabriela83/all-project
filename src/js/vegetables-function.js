import React,{useState,useEffect} from 'react';
import vegetables from "./vegetables";

////////

const articleStyle={
  cursor:"pointer" ,
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  width:"100%"
}

//////////

export default function InfoVegetables(props){
  const [xvegetables,setVegetables] = useState(vegetables);
console.log("vegetables from inside InfoVegetables function component is : " , vegetables);

  //echivalent componentDidMount
  //useEffect(functie, []) - array gol ca al doilea parametru
  useEffect(()=>{
    console.log(" did mount from InfoVegetables function component ");
  setTimeout(() =>{
  let newVegetables=[...xvegetables];
  for(let i=0 ; i<newVegetables.length ; i++){
  newVegetables[i].code=i + 1;
}
setVegetables(newVegetables)
}, 7000);

  },[]);

  //echivalent componentDidUpdate
  //useEffect(functie, [stateVar]) - array care contine variabilele de state monitorizate
  useEffect(()=>{
    console.log("did update from InfoVegetables function component , file curs36");
  },[xvegetables])


  return (
    <>
    <h3>Perfect recipe ingredients:</h3>
      <section style={articleStyle}>
    {xvegetables.map( (el,index) => {
          return(

            <article  key={index} style={articleStyle}>
            <div style={{backgroundImage:el.urlImage,
                         height:"300px",
                         margin:"1em",
                         borderRadius:"0.3em",
                         boxShadow:"1.5px 1.5px 3px gray",
                         backgroundRepeat:"no-repeat",
                         backgroundPosition:"center",
                         backgroundSize:"cover"}} className="vegetables-image"></div>

            <p >Name: {el.name}</p>
            <p >Code ingredient: {el.code}</p>
            <p>Details:</p>
            <p style={{textAlign:"center" , margin:"0 1em" , padding:"0 1em"}}>{el.details}</p>
            </article>

          )
        })}
        </section>
     </>
        )

}

console.log("useEfect ex 3 day 2 react curs 36 13 05 2022");

// height: 300px;
//  width: 100%;
//  background-repeat: no-repeat;
//  background-image: url(./images/pexels-photo-847393.jpeg);
//  background-position: center;
//  background-size: cover;

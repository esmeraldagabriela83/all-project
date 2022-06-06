import React, {Component} from "react";

const styleDiv={
  width:"100%",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column"
}

class BeforeAndAfter extends Component {
  //folosim constructor pentru initializat this.state
    constructor(props){
      super(props);
      //doar aici am voie sa scriu in state direct!!!
      this.images=[
        "url(../assets/images/pink-greens.jpg)" ,
        "url(../assets/images/pink-sweets.jpg)"
      ]
      this.state = {
        btnText:"Greens",
        myImage:0
      }
    }

  //folosesc arrow function pentru a putea accesa
  //obiectul curent din contextul clasei


changeImageClickButton = (event) =>{
    console.log("IN CLASS user click button and image change");
    this.setState({
          myImage:this.state.myImage === 0 ? 1 :0
          //this.state.myImage este 0//primul click  sau 1//al doilea click
     })
     this.setState({
          btnText : this.state.btnText === "Greens" ? "Sweets" : "Greens"
      })
  }

  render() {
    return (
    <section style={styleDiv}>

       <div style={{height:"300px" ,
                    borderRadius: "0.3em",
                    boxShadow: "1.5px 1.5px 3px gray",
                    backgroundImage: this.images[this.state.myImage],
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"}} className="before-after-img"></div>
          <button onClick={this.changeImageClickButton}>{this.state.btnText}</button>
      </section>
    )
  }
}
////////////////////////////////////////

export default BeforeAndAfter;

console.log("before and after image on click");

import React, {Component} from "react";
//////////////////
const initialText=`
All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
 combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
 The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc
`
const changedText=`
Contrary to popular belief, Lorem Ipsum is not simply random text.
 It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
 a Latin professor at Hampden-Sydney College in Virginia,
 looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
 and going through the cites of the word in classical literature, discovered the undoubtable source.
`
//////////////////
class ContentDisplay extends Component {

  constructor(props){
        console.log("CONSTRUCTOR")
        super(props);
        this.state = {
          text:initialText,
          image:"url(../assets/images/cake.jpg)"
        }
      }
      componentDidMount(){
        console.log("DID MOUNT")
        setTimeout(()=>{
              console.log("5 seconds passed since mount")
              this.setState({
                text:changedText,
                image:"url(../assets/images/fruits.jpg)"
              })
        },7000)

      }
      componentDidUpdate(){
        console.log("DID UPDATE");
      }
      render() {
        console.log("RENDER")
        return (
          <section className="about">
          <h3 style={{marginBottom:"1em"}}>Add</h3>
          <div style={{width:"100%",
                      textAlign:"center"}}>{this.state.text}</div>
          <div style={{marginTop:"1em",
                      height:"300px" ,
                      borderRadius:"0.3em",
                      boxShadow:"1.5px 1.5px 3px gray",
                      backgroundImage: this.state.image,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover"}} className="removeAddImage"></div>
          </section>
        )
      }

}

class Content extends Component{
  constructor(props){
    super(props);
    this.state = {
      on: true
    };
  }
  render(){
    return (
      <>
      {this.state.on ?
            <div className="about">
              <ContentDisplay/>
              <button onClick={(e)=>{e.preventDefault();this.setState({on:false})}}>Remove</button>
            </div> :
            <div style={{marginBottom:"1em"}}>Add Removed</div>
      }
      </>
    )
  }
}

export default Content;

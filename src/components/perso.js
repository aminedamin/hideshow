import React from "react";
class Perso extends React.Component {
    constructor () {
        super ()
        this.state={
         fullname:"Amine",
         bio :"Make a list of your skills",
         prof :"fullstack js",
         mg :"/profile.png",
         count : 0
        }

    }
componentDidMount(){
setInterval(()=>this.setState({count :this.state.count+1}),1000);
}
 render() {
    return(
        <div>
            <h1>{this.state.count}</h1>
            <h1>my name : {this.state.fullname}</h1>
            <h2>Bio : {this.state.bio}</h2>
            <h3>profession: {this.state.prof}</h3>
            <img src={this.state.mg} alt="not found"></img>

        </div>
    )
 }
}
export default Perso;
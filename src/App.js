import React, { Component } from "react";
import "./Personne.css"
import Personne from "./Personne"
import Image from "./img.jpg"


class App extends Component {
  
    state = {
      id: 1,
      fulName : "Martial YAO",
      bio : "Apprenannt à Gomycode",
      imgSrc : Image,
      profession : "Developpeur Fulstack JS ",
      shows : false
    }
   

   displayItems(){
    this.setState({
        shows: ! this.state.shows
      }
    )
  }
 
   displayItemss(){
    this.setState({
        shows: false
      }
    )

  }
 

  render(){
      return (
        <div className="App">
          <Personne 
            name={this.state.fulName} 
            bio={this.state.bio} 
            imgSrc={this.state.imgSrc} 
            shows={this.state.shows} 
            profession={this.state.profession} 
            handleCliked={this.displayItems.bind(this)}
            handleClik={this.displayItemss.bind(this)}
          />
        </div>
      );
  }
}

export default App;

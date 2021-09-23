import React, { Component } from "react"
import "./Personne.css"


class Personne extends Component {
 
    render(){
  
        return(

            this.props.shows ? (
                <>
                    <div className="card">
                    <div className="card__left">
                        <div className="card__left--content">
                        <h1>{this.props.name}</h1> 
                        <p>{this.props.bio}</p>
                        <p>{this.props.profession}</p>
                        </div>
                    </div>          
                    <div className="card__right">
                    <img src={this.props.imgSrc} alt="developpeur" /> 
                    </div>                   
                </div>
                    <button onClick={this.props.handleClik}>Afficher profile</button> 
                </>
            ):  <button onClick={this.props.handleCliked}>Afficher profile</button>
        )
    }
}

export default Personne;
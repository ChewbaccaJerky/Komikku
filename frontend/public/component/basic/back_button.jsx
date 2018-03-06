import React from "react";
import ReactRouter from "react-router";

class BackButton extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.dir(window.history.back());
    }

    render(){

        return(
            <button onClick={this.handleClick}>BackButton!!!!</button>
        );
    }
}

export default BackButton;
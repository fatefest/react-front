import React,{Component} from "react";
import "./Jin.css";

class JinSquare extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <button className="square" onClick={this.props.onClick}>{this.props.value}</button>
        );
    }
}

export default JinSquare;
import React,{Component} from "react";

class JinSquare extends Component{
    constructor(props){
        super(props);
        this.state = {text:'',current:'O'};
    }

    changeState = (e)=> {
        this.setState(preventState => ({
            current:preventState.current==='X'?'O':'X'
        }));
    }


    render(){
        return (
            <button className="square" onClick={this.changeState}>{this.state.current}</button>
        );
    }
}

export default JinSquare;
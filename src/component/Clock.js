import React from 'react'

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            showHello:false,
            btcState:1,
            btnMode:false
        };
        //使用bind将组件this绑定到方法handleMouseOver里面去
        // this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        let pps = {a:'a',b:'b',c:'c'};
        let {a,...pp} = pps;
        return (
            <div>
                <h1 onMouseOver={(e)=>this.handleMouseOver('nanana',e)} hidden={this.state.showHello}>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onMouseOver={this.handleBtnToggle}>{this.state.btnMode?'开':'关'}</button>
                <h1 {...pp}>aaa</h1>
            </div>
        );
    }
    //使用属性初始化器，this则自动绑定到整个组件
    handleMouseOver = (name,e)=>{
        e.preventDefault();
        alert(name);
        this.setState(perventState=>({
                showHello:true
            })
        );
    }
    handleBtnToggle = (e) =>{
        this.setState(preventState =>({
            btnMode: !preventState.btnMode
        }))
    }

    btn1Click = (e) =>{
        this.setState(prevent =>({
            btnState:prevent.btnState+1
        }));
    }

    clickHi(e){
        e.preventDefault();
        alert("hello !");
    }

}

export default Clock;
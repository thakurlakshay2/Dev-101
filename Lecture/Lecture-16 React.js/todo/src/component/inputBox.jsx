import React, { Component } from 'react';
class InputBox extends Component {
    state = { newTask:"" }
    changeText=e=>{
        // console.log(e.currentTarget.value);
        this.setState({newTask:e.currentTarget.value});
    };
    submitTask=()=>{
        if(this.state.newTask!==""){
        this.props.addTask(this.state.newTask);
        this.setState({newTask:""});
        }
    }
    render() { 
        return (<React.Fragment>
            <input type="text" value={this.state.newTask} onChange={this.changeText}></input>
            <button onClick={this.submitTask}>Submit</button>
            </React.Fragment>
          ); 
    }
}
 
export default InputBox;
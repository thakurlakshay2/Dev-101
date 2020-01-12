//imrc
import React, { Component } from 'react';
import Tasks from './tasks';
import InputBox from './inputBox'
//cc
class Todo extends Component {
    
    state = { 
        tasks:[{task:"Make Coffee",id:1},
               {task:"Learn React",id:2},
               {task:"Learn ES6",id:3},]
     }

    addTask=(t)=>{
        let count=Date.now.toString();
        const obj={task:t,
                   id:count
                };
        // console.log(task+"addTask");
        var copy=[...this.state.tasks];
        copy.push(obj);
        this.setState({tasks:copy});
    } 
    RemoveTask=(task)=>{
       const filteredTask=this.state.tasks.filter((t_)=>{
           return task!==t_.task
       })
       this.setState({tasks:filteredTask})              
    }
    render() { 
    return (<React.Fragment>
        <InputBox addTask={this.addTask}>
        </InputBox>
        <Tasks tasks={this.state.tasks} passRemove={this.RemoveTask}>
        </Tasks>

        </React.Fragment>
        );
    }
}
 
export default Todo;    
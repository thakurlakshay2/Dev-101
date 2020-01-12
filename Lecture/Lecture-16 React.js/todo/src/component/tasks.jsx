//imr
import React from 'react';
//sfc
const  Tasks= (props) => {
    
    return (   
    <ul>{
        props.tasks.map((t)=>{
            return <li key={t.id} onClick={()=>{props.passRemove(t.task)}}>{t.task}</li>;
                 })
            
    }</ul>
    
    );
    
}
 
export default Tasks ;

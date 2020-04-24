import React, {useState} from 'react';    

const Toggle = ({challenges}) => {
    const[expand, setExpand]=useState(false)
    
    return ( 
        <React.Fragment>
            <div className="toggle">
               <button 
                style={{cursor:"pointer"}}
                onClick={() => setExpand(!expand)}
                className="button">begin</button>
                {expand && <span><p className= "greetings">{challenges.description}</p> <label>completed</label><input type="checkbox" /> </span> }
 
            </div>
        </React.Fragment>
        
     );
}
 
export default Toggle;
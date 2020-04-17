import React from 'react';

const SubHead = (props) => {
    const{subheads}=props
    
    return ( 
        <React.Fragment>
            {subheads.map(subhead => (
                <div key={subhead} className={subhead}>
                    <ul key={subhead} className="sub-list">
                        <li><a href={"#" + subhead}>{subhead}</a></li>
                    </ul>
                </div>
            ))}
        </React.Fragment>
     );
}
 
export default SubHead;
import React from 'react';


const MainHeader = (props) => {
const {mains}=props;

    return ( 
        <React.Fragment>
        {mains.map(main => (
            <div key={main} className="main"> 
                <ul className= "main-list" key={main}>
                    <li><a href={"#" + main}>{main}</a></li>
                </ul>
            </div>
        ))}
        </React.Fragment>
    );
}
 
export default MainHeader;
import React from 'react';    
import {Link} from "react-router-dom";

const NavBar = (props) => {
    const {navigations}=props
    return ( 
        <React.Fragment>
            {navigations.map(navigation => (
            <div key={navigation} className={navigation}>  
                <nav className="navigation">
                    <ul className="unordered-list"key={navigation}>
                        <li className="list-items"><Link to={`/${navigation}`}>{navigation}</Link></li>
                    </ul>
                </nav>
            </div>
            ))}

        </React.Fragment>
     );
}
 
export default NavBar;
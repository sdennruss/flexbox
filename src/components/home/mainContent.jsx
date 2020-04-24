import React from 'react'; 

const MainContent = (props) => {
  return ( 
    <React.Fragment>
        <div className="home-container">
        <h1> MainContent</h1>
        </div>

        <div className="home-brief-container">
            <div className="about-home-img">
                <h1>Img Brief</h1>
            </div>

            <div className="about-brief">
                <h1>Copy Brief</h1>
            </div>
        </div>
    </React.Fragment>
   );
}
 
export default MainContent;
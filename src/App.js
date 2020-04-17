import React, { Component } from 'react';


class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
      <div className="d-flex">
        <div className="p-2 bg-info">Flex item 1</div>
        <div className="p-2 bg-warning">Flex item 2</div>
        <div className="p-2 bg-primary">Flex item 3</div>
      </div>

    </React.Fragment>
     );
  }
}
 
export default App;
import React from "react";

import Calculator from './components/Calculator';
// import Log from './components/Log';
// import Settings from './components/Settings';


class App extends React.Component {


  
  render() {
  return (
    <div id="main">
          
          <Calculator />
          {/* <Log />
          <Settings /> */}
  {/* <h1>{this.state.correctionTarget}</h1> */}
    </div>
  
  );
        }


}

export default App;

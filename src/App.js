import React from "react";

import Calculator from './components/Calculator';
import Menu from './components/Menu';

// import Log from './components/Log';



class App extends React.Component {



  render() {
  return (
    <div id="main">
          <Menu />
          <Calculator />
          {/* <Log /> */}
  {/* <h1>{this.state.correctionTarget}</h1> */}
    </div>
  
  );
        }


}

export default App;

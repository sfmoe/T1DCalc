import React from "react";
import Calculator from './components/Calculator';
import Menu from './components/Menu';
import Log from './components/Log';



const App = () => {

  return (
    <div id="main">
          <Menu />
          <Calculator />
          <Log short={true} />
    </div>
  );
}

export default App;


import Home from "./components/Home";

import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";

import {BrowserRouter, Route} from "react-router-dom";

function App(){
return (
    <div>
      <BrowserRouter>
          <Home/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
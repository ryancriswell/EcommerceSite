import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";

import {Routes, Route} from "react-router-dom"

function App(){
return (
    <div>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/shop" element={ <Shop/> }/>
        <Route path="/subscribe" element={ <Subscription/> }/>
        <Route path="/locations" element={ <Locations/> }/>
      </Routes>
    </div>
  );
}

export default App;
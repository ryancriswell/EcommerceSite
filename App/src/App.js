
import Home from "./components/Home";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Locations from "./components/Locations";

import {Routes, Route} from "react-router-dom";

function App(){
return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/locations" element={<Locations/>}/>
        {/* ADD MORE ROUTES HERE!! */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
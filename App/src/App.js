
import Home from "./components/Home";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Locations from "./components/Locations";
import Cart from "./components/Cart";
import React from "react";

import {Routes, Route} from "react-router-dom";

function App(){
    const [cartItems, setCartItems] = React.useState(    
      {}
    );
    console.log("uwu")

return (
    <div>
      <Header/>
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} />}/>
        <Route path="/locations" element={<Locations/>}/>
        {/* ADD MORE ROUTES HERE!! */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
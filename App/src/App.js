
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
    const [cartShown, setCartShown] = React.useState(    
      false
    );

return (
    <div>
      <Header setCartShown={setCartShown} cartShown={cartShown} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} cartShown={cartShown} setCartShown={setCartShown} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} setCartShown={setCartShown} />}/>
        <Route path="/locations" element={<Locations/>}/>
        {/* ADD MORE ROUTES HERE!! */}
      </Routes>
      <Footer setCartShown={setCartShown} cartShown={cartShown}/>
    </div>
  );
}

export default App;

import Home from "./components/Home";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Locations from "./components/Locations";
import {useCookieState} from "use-cookie-state";
import Cart from "./components/Cart";

import {Routes, Route} from "react-router-dom";

function App(){
    const[cartItems, setCartItems] = useCookieState({
      itemName: "",
      count: 0
    });

return (
    <div>
      <Header/>
      <Cart />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/shop" element={<Shop props={[cartState, setCartState]} />}/>
        <Route path="/locations" element={<Locations/>}/>
        {/* ADD MORE ROUTES HERE!! */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
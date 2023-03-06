
import Home from "./components/Home";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Account from "./components/Account";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription";

import {Routes, Route} from "react-router-dom";

function App(){
return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/shop" element={<Shop/>}/>
        {/* ADD MORE ROUTES HERE!! */}
        <Route path="/account" element={<Account/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

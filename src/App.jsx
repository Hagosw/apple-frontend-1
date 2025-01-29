import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Mainpage from "./components/Pages/Main/Mainpage.jsx";
import Iphone from "./components/Pages/Iphone/Iphone.jsx";
import Four04 from "./components/Pages/Four04/Four04.jsx";
import Mac from "./components/Pages/Mac/Mac.jsx";
import Productpage from "./components/Pages/SingleAppleProduct/Productpage.jsx";
import Cart from "./components/Pages/Cart/Cart.jsx";
import Search from "./components/Pages/Search/Search.jsx";
import Ipad from "./components/Pages/Ipad/Ipad.jsx";
import Watch from "./components/Pages/Watch/Watch.jsx";
import Support from "./components/Pages/Support/Support.jsx";
import Music from "./components/Pages/Music/Music.jsx";
import Tv from "./components/Pages/TV/Tv.jsx";
import SharedLayout from "./components/Pages/SharedRoutes/SharedLayout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:productID" element={<Productpage />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/search" element={<Search />} />
          <Route path="/support" element={<Support />} />
          <Route path="/music" element={<Music />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

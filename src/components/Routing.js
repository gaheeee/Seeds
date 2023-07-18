import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import P_01_01 from "./pages/P_01/P_01_01.js";
import P_01_02 from "./pages/P_01/P_01_02";

import P_02_01 from "./pages/P_02/P_02_01";
import P_02_02 from "./pages/P_02/P_02_02";



export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/p0101" element={<P_01_01 />} />
      <Route path="/p0102" element={<P_01_02 />} />

      <Route path="/p0201" element={<P_02_01 />} />
      <Route path="/p0202" element={<P_02_02 />} />


    </Routes>
  );
}
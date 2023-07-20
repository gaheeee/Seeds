import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import P_01_01 from "./pages/P_01/P_01_01.js";
import P_01_02 from "./pages/P_01/P_01_02";

import P_02_01 from "./pages/P_02/P_02_01";
import P_02_02 from "./pages/P_02/P_02_02";

import P_03_01 from "./pages/P_03/P_03_01.js";
import P_03_02 from "./pages/P_03/P_03_02";

import P_04_01 from "./pages/P_04/P_04_01";
import P_04_02 from "./pages/P_04/P_04_02";



export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/p0101" element={<P_01_01 />} />
      <Route path="/p0102" element={<P_01_02 />} />

      <Route path="/p0201" element={<P_02_01 />} />
      <Route path="/p0202" element={<P_02_02 />} />

      <Route path="/p0301" element={<P_03_01 />} />
      <Route path="/p0302" element={<P_03_02 />} />

      <Route path="/p0401" element={<P_04_01 />} />
      <Route path="/p0402" element={<P_04_02 />} />


    </Routes>
  );
}
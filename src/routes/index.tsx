import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../views/layout";
import Home from "../views/pages/home";
import Fav from "../views/pages/fav";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="fav" element={<Fav />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

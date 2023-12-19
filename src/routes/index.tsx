import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../views/layout";
import Movie from "../views/pages/movie";
import Fav from "../views/pages/fav";
import Login from "../views/pages/login";
import Detail from "../views/pages/detail";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movie />} />
          <Route path="movie" element={<Movie />} />
          <Route path="fav" element={<Fav />} />
          <Route path="login" element={<Login />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

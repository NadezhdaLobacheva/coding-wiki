import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Layout/Layout";

export default function Router(setUser, user) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<></>} />
          <Route path="/signup" element={<></>} />
          <Route path="/signin" element={<></>} />
          <Route path="/signout" element={<></>} />
          <Route path="/profile" element={<></>} />
          <Route path="*" element={<h1>Нет контента</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

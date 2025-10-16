import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Layout/Layout";
import ContentPage from "../../pages/ContentPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ContentPage />} />
          <Route path="/signup" element={<></>} />
          <Route path="/signin" element={<></>} />
          <Route path="/signout" element={<></>} />
          <Route path="/profile" element={<ContentPage />} />
          <Route path="*" element={<h1>Нет контента</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

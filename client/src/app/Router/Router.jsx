import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Layout/Layout";
import Dictionary from "../../widgets/dictionary/Dictionary";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<><Dictionary /></>} />
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

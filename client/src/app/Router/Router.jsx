import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Layout from "../Layout/Layout";
import LoginPage from "../../pages/AuthPages/LoginPage";
import SignUpPage from "../../pages/AuthPages/SignUpPage";
import ContentPage from "../../pages/ContentPage/ContentPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
// import Dictionary from "../../widgets/dictionary/Dictionary";

export default function Router({ user, setUser }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout setUser={setUser} user={user} />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<ContentPage user={user} />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/profile" element={<ProfilePage user={user} />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "90vh",
                }}
              >
                Нет контента
              </div>
            }
          />
          {/* <Route path="/search" element={<Dictionary />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

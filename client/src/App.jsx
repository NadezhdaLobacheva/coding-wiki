import { useState } from "react";
import Router from "./app/Router/Router";
import { useEffect } from "react";
import axiosInstance, { setAccessToken } from "./shared/lib/axiosInstance";

export function App() {
   // Добавляем isAdmin в начальное состояние 
   const [user, setUser] = useState({ status: "logging", data: null , isAdmin: false});
  
  useEffect(() => {
    axiosInstance("/auth/refreshTokens")
      .then((res) => {
      const userData = res.data.user;
      const isAdmin = Boolean(userData?.isAdmin);

         setUser({ 
          status: "logged", data: userData, isAdmin });
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        setUser({ status: "guest", data: null, isAdmin: false });
        setAccessToken("");
      });
  }, []);

  return <Router setUser={setUser} user={user} />;
}


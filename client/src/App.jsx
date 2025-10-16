import { useState } from "react";
import Router from "./app/Router/Router";
import { useEffect } from "react";
import axiosInstance, { setAccessToken } from "./shared/lib/axiosInstance";

export function App() {

  const [user, setUser] = useState({ status: "logging", data: null });
  
  useEffect(() => {
    axiosInstance("/auth/refreshTokens")
      .then((res) => {
        setUser({ status: "logged", data: res.data.user });
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        setUser({ status: "guest", data: null });
        setAccessToken("");
      });
  }, []);

  return <Router setUser={setUser} user={user} />;
}

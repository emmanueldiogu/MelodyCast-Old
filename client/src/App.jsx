import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Weather from "./pages/Weather";
import Location from "./pages/Location";
import Music from "./pages/Music";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useSearch } from "./providers/useSearch";

export default function App() {
  const { isAuth } = useSearch();

  return (
    <>
      {isAuth ? (
        <Layout>
          <Routes>
            <Route path="/" Component={Weather} />
            <Route path="/location" Component={Location} />
            <Route path="/music" Component={Music} />
            <Route path="/settings" Component={Settings} />
            <Route path="/account" Component={Account} />
            <Route path="/sign-in" Component={SignIn} />
            <Route path="/sign-out" Component={SignUp} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/sign-in" Component={SignIn} />
          <Route path="/sign-out" Component={SignUp} />
        </Routes>
      )}
    </>
  );
}

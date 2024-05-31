import { Routes, Route, useLocation } from "react-router-dom"
import Layout from "./components/Layout";
import Weather from "./pages/Weather";
import Location from "./pages/Location";
import Music from "./pages/Music";
import Settings from "./pages/Settings";
import Account from "./pages/Account";


export default function App() {
  // const currentPath = useLocation().pathname;
  return (
    <Layout>
      {/* {currentPath !== '/user' && <Navbar />} */}
      <Routes>
        <Route path="/" Component={Weather} />
        <Route path="/location" Component={Location} />
        <Route path="/music" Component={Music} />
        <Route path="/settings" Component={Settings} />
        <Route path="/account" Component={Account} />
      </Routes>
    </Layout>
  )
}

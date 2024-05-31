import { Routes, Route, useLocation } from "react-router-dom"
export default function App() {
  const currentPath = useLocation().pathname;
  return (
    <>
      {currentPath !== '/user' && <Navbar />}
      <Routes>
        <Route />
      </Routes>
    </>
  )
}

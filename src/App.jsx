import LoginPage from "./pages/Login"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
function App() {
  

  return (
    
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

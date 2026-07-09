import Home from "./pages/Home"
import Movies from "./pages/Movies"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:searchItem' element={<Movies />} />
      </Routes>
    </Router>
  )
}

export default App

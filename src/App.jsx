import Home from "./pages/Home"
import Movies from "./pages/Movies"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieInfo from "./pages/MovieInfo"


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:searchItem' element={<Movies />} />
          <Route path='/movie/:imdbID' element={<MovieInfo />} />
      </Routes>
    </Router>
  )
}

export default App

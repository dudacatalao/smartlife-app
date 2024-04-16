
import './App.css'
// import BemEstar from './pages/BemEstar'
 import Home from './pages/Home'
 import { BrowserRouter, Routes, Route } from "react-router-dom"
 import BemEstar from './pages/BemEstar'
 import QualidadeDeVida from './pages/QualidadeDeVida'
 import BlogPage from './pages/BlogPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bemestar' element={<BemEstar/>}/>
        <Route path='/qualidadedevida' element={<QualidadeDeVida/>}/>
        <Route path='/blogpage' element={<BlogPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

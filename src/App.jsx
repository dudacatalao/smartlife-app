
import './App.css'
// import BemEstar from './pages/BemEstar'
 import Home from './pages/Home'
 import { BrowserRouter, Routes, Route } from "react-router-dom"
 import BemEstar from './pages/BemEstar'
 import QualidadeDeVida from './pages/QualidadeDeVida'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bemestar' element={<BemEstar/>}/>
        <Route path='/qualidadedevida' element={<QualidadeDeVida/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

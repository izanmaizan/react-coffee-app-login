import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home.jsx'
import NotFound from './pages/notfound.jsx'
import Login from './components/login.jsx'
import Regist from './components/regist.jsx'
import StepOne from './components/stepOne.jsx'

const App = () => {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="stepone" element={<StepOne />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

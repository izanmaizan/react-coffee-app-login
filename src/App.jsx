import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home.jsx'
import NotFound from './pages/notfound.jsx'
import SignIn from './components/sign-in.jsx'
import Regist from './components/regist.jsx'
import StepOne from './components/stepOne.jsx'
import StepTwo from './components/stepTwo.jsx'
import StepThree from './components/stepThree.jsx'
import Back from './components/back.jsx'
import { useNavigate } from 'react-router-dom';

const App = () => {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/stepone" element={<StepOne />} />
        <Route path="/steptwo" element={<StepTwo />} />
        <Route path="/stepthree" element={<StepThree />} />
        <Route path="/back" element={<Back />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import './CSS/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import SignUp from './SignUp'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App
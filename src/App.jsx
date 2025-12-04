import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './CSS/App.css'
import Login from './Login'
import Home from './Home'
import SignUp from './SignUp'
import Navbar from './Navbar'
import Footer from './Footer'
import Admin from "./Admin"
import AdminProduct from './AdminProduct'
import Product from './Product'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import ForgotPassword from './ForgotPassword'

const AppContent = () => {
  const location = useLocation()

  const hideComponent =
    location.pathname === "/SignUp" ||
    location.pathname === "/" ||
    location.pathname === "/ForgotPassword"

  return (
    <>
      {!hideComponent && <Navbar />}
      <Routes>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/ForgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path='/AdminProduct' element={<AdminProduct />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Product' element={<Product />}></Route>
      </Routes>
      {!hideComponent && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
export default App
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav class="navbar">
        <div class="navbar-container">
          <div class="logo">
            <a href="#home">YourLogo</a>
          </div>
          <ul class="nav-links">
            <li><Link to="/Home"><a href="#home">Home</a></Link></li>
            <li><Link to="/About"><a href="#about">About</a></Link></li>
            <li><Link to="/Blog"><a href="#blog">Blog</a></Link></li>
            <li><Link to="/Product"><a href="#product">Product</a></Link></li>
            <li><Link to="/Contact"><a href="#contact">Contact</a></Link></li>  
          </ul>
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    </nav>
  )
}
export default Navbar
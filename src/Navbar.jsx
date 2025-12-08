import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">YourLogo</a>
        </div>
        <ul className="nav-links">
          <li><Link to="/Home"><a href="#home">Home</a></Link></li>
          <li><Link to="/About"><a href="#about">About</a></Link></li>
          <li><Link to="/Blog"><a href="#blog">Blog</a></Link></li>
          <li><Link to="/Product"><a href="#product">Product</a></Link></li>
          <li><Link to="/Contact"><a href="#contact">Contact</a></Link></li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
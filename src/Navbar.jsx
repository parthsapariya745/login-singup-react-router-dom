const Navbar = () => {
  return (
    <nav class="navbar">
        <div class="navbar-container">
          <div class="logo">
            <a href="#home">YourLogo</a>
          </div>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
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

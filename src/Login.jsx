import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let em = JSON.parse(localStorage.getItem("email"))
  let pass = JSON.parse(localStorage.getItem("password"))

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate()

  let handleLogin = () => {
    if (email === em && pass === password) {
      alert("Login Successfully")
      navigate('/Home')
    }
    else {
      alert("Invalid")
    }
    setEmail("")
    setPassword("")
  }
  return (
    <div className="container">
      <div className="login">
        <h1>Login</h1>
        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Enter Email" />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Enter Password" />
        <p className="pass-container"><Link to='/ForgotPassword' className="fpass">Forgot password?</Link></p>
        <button onClick={handleLogin}>Login</button>
        <p>Don't have an account? <Link to='/' className="same">SignUp</Link></p>
      </div>
    </div>
  );
}
export default Login;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let user = "admin"
  let pass = "admin@123"

  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate()

  let handleLogin = () => {
    if (user === userName && pass === password) {
      alert("Login Successfully")
      navigate('/Home')
    }
    else {
      alert("Invalid")
    }
    setUserName("")
    setPassword("")
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <input type="text" onChange={(e)=> setUserName(e.target.value)} value={userName} placeholder="Enter Username" />
      <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Enter Password" />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to='/SignUp' className="sign">SignUp</Link></p>
    </div>
  );
}
export default Login;
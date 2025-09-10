import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function SignUp() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  let navigate = useNavigate()

  let handleSignUp = () => {
    if (email && password) {
      alert("Account Created Successfully")
      navigate("/Login")
      
      localStorage.setItem("email", JSON.stringify(email))
      localStorage.setItem("password", JSON.stringify(password))
    }
    else {
      alert("Please enter your email and password")
    }

    setEmail("")
    setPassword("")
  }

  return (
    <div className="container">
      <div className="signup">
        <h1>SignUp</h1>
        <form action="">
          <input type="email" placeholder="Enter new email" onChange={(e) => setEmail(e.target.value)} value={email} required />
          <input type="password" placeholder="Enter new password" onChange={(e) => setPassword(e.target.value)} value={password} required />
          <button onClick={handleSignUp}>Create Account</button>
        </form>
      </div>
    </div>
  )
}
export default SignUp
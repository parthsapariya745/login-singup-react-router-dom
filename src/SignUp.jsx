import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp() {
  let em = 'admin@gmail.com'
  let pass = 'admin@123'
  
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  let navigate = useNavigate()

  let handleSignUp = () => {
    if (em === email && pass === password) {
      alert("Signup Successfully")
      navigate("/")
    }
    else {
      alert("Invalid")
    }
    setEmail("")
    setPassword("")
  }

  return (
    <div className="signup">
        <h1>SignUp</h1>
        <input type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
        <button onClick={handleSignUp}>SignUp</button>
    </div>
  )
}
export default SignUp
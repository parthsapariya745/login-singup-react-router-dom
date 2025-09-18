import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {
  let [newPassword, setNewPassword] = useState("")
  let [confirmPassword, setConfirmPassword] = useState("")

  let navigate = useNavigate()

  let handlePassword = () => {
    if (newPassword === confirmPassword) {
      alert("Password change successfully")
      navigate("/Login")

      localStorage.setItem("password", JSON.stringify(newPassword))
    }
    else {
      alert("Set password and Confirm password are not same")
    }
    setNewPassword(""), setConfirmPassword("")
  }
  return (
    <div className="container">
      <div className="login">
        <h1>Reset Password</h1>
        <input type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} placeholder="Set new password" />
        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="Confirm Password" />
        <button onClick={handlePassword}>Change Password</button>
      </div>
    </div>
  )
}
export default ForgotPassword
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Admin = () => {
    let [adminName, setAdminName] = useState("")
    let [adminPassword, setAdminPassword] = useState("")
    let navigate = useNavigate()

    let handleLogin = () => {
        let aName = "admin-parth"
        let aPassword = "parth$123"

        if (aName === adminName && aPassword === adminPassword) {
            alert("Login Successfully")
            navigate("/AdminProduct")
        } else {
            aName !== adminName && aPassword !== adminPassword ? alert("Invalid admin name and password") : aName !== adminName ? alert("Invalid admin name") : alert("Invalid admin password")
        }
        setAdminName("")
        setAdminPassword("")
    }
    return (
        <div className="admin-box">
            <h1>Admin Login</h1>
            <input type="text" onChange={(e) => setAdminName(e.target.value)} value={adminName} placeholder="Enter Admin name" />
            <input type="password" onChange={(e) => setAdminPassword(e.target.value)} value={adminPassword} placeholder="Enter Admin Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Admin
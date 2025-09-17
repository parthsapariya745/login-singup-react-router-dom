import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Admin = () => {
    let [adminName, setAdminName] = useState("")
    let [adminPassword, setAdminPassword] = useState("")
    let navigate = useNavigate()

    let handleLogin = () => {
        let addName = "admin-parth"
        let addPassword = "parth$123"

        if (addName === adminName && addPassword === adminPassword) {
            alert("Login Successfully")
            navigate("/AdminProduct")
        }
        else if (addName !== adminName && addPassword === adminPassword) {
            alert("Admin name are incorrect")
            navigate("/Home")
        }
        else if (addName === adminName && addPassword !== adminPassword) {
            alert("Admin password are incorrect")
            navigate("/Home")
        }
        else {
            alert("Admin name and password are incorrect")
            navigate("/Home")
        }
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
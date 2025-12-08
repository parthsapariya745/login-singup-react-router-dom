const { connectDB } = require("./config/db")
const express = require("express")
const router = require("./routes/userRoute")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/app/product", router)
app.use(cors({
    origin: "http://localhost:5173"
}))

connectDB()

app.listen(5000, () => {
    console.log("Server Running port: 5000")
})
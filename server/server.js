const { connectDB } = require("./config/db")
const express = require("express")
const router = require("./routes/userRoute")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/app/product", router)

connectDB()

app.listen(5000, () => {
    console.log("Server Running port: 5000")
})
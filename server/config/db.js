const mongoose = require("mongoose")

exports.connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/AdminPanel")
      .then(() => console.log("DB Connected"))
      .catch(() => console.log("DB is While Connected"))
  } catch (error) {
    console.log("DB Connection error", error);
  }
}
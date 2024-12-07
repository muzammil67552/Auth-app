const mongoose = require("mongoose")

const mongo_url= process.env.MONGO_CONN;

mongoose.connect(mongo_url)
try {
    console.log("Connect DB Successfully")
} catch (error) {
    console.log("Error Connecting...",err)
}
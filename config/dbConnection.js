const mongoose = require("mongoose");

const connectToDatabase = async () => {

    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Database Connected Successfully")
    } catch (err) {
        console.log("Error While Connecting to DB", err.message)

    }
}

module.exports = connectToDatabase;
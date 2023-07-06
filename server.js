const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/UserRoute");
const connectToDatabase = require("./config/dbConnection");
require("dotenv").config();

// connectToDatabase();

const app = express();

//middlewares
app.use(cors());
app.use(express.json()) 

app.use("/", userRoute)

app.listen(process.env.PORT, async () => {
    await connectToDatabase()
    console.log("Server Started on PORT NO:", process.env.PORT)
})
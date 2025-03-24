require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
connectDB();

const port = process.env.PORT

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get('/',(req,res)=>{
    res.send("server running")
})

app.listen(port, () => console.log(`Server running on port ${port}`));

const express=require("express")
const {connection}=require("./db")
const {userRoutes}=require("./routes/authRoutes")
const {taskRoutes}=require("./routes/taskRoutes")


const cors=require("cors")
require("dotenv").config()

const app=express()
app.use(express.json())
app.use(cors())
app.use("/user",userRoutes)
app.use("/task",taskRoutes)
app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${process.env.PORT}`);
    } catch (err) {
        console.log(err);
    }
});
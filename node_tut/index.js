import express from "express";
import bodyParser from "body-parser"
import usersRoutes from "./routes/users.js"


const app = express()
const PORT = 5000;

app.use(bodyParser.json())


app.use("/users", usersRoutes)

app.get("/", (req, res) => {
    console.log("This is a newPage1 [HOME]")
    res.send("This is The HOME PAGE!")
})


app.listen(
    PORT,
    () => console.log(`Our First Server is running on PORT: https://localhost:${PORT}`)
)


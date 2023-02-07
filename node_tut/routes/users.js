import express from "express"
import { v4 as uuidv4 } from "uuid"

uuidv4()
const router = express.Router()


const users = []

router.get("/", (req, res) => {
    res.send(users)
})



router.post("/", (req, res) => {
    const newUser = req.body
    users.push({ ...newUser, id: uuidv4() })
    res.send(`New User Called ${newUser.firstName} Was Added To The Database Successfully!`)
})

export default router 
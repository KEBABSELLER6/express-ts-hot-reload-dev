import express, { Request, Response } from "express"
import { greet } from "./greeter"

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: greet()})
})

const PORT = process.env.PORT || 9000 

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
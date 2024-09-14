import express, { Request, Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "Hello World!"})
})

const PORT = process.env.PORT || 9000 

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
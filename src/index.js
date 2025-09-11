import express from 'express' 
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './db/index.js'
dotenv.config({
    path:".env"
})

connectDB()



/* const app = express()
app.get("/", (req, res) => {
    res.send("hello world")
})
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: "1",
            title: "why does programmers love darkness",
            content: "because whiteness attract bugs "
        },
        {
            id: "1",
            title: "why does programmers love darkness",
            content: "because whiteness attract bugs "
        },
        {
            id: "1",
            title: "why does programmers love darkness",
            content: "because whiteness attract bugs "
        },
        {
            id: "1",
            title: "why does programmers love darkness",
            content: "because whiteness attract bugs "
        },
        {
            id: "1",
            title: "why does programmers love darkness",
            content: "because whiteness attract bugs "
        },
        {
            id: "1",
            title: "why does programmers love darkness",
            content: "because whiteness attract bugs "
        },
    ]
    res.send(jokes)
})
app.listen(process.env.PORT || 3000, () => {
    console.log(`the app is listening`)
}) */
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import personRoute from "./routes/personRoute.js"

//config env
dotenv.config()

//database connect
connectDB()

const app = express()

app.use(express.json())

//API Route
app.use("/api", personRoute)

const port = process.env.PORT || 8080

app.listen(port, () => {
	console.log(`App is listening on port ${port}`)
})

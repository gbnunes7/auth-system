import express from "express"
import connectToDb from "./database/config/connect.js"
import routes from "./routes/index.js"

export const app = express()

connectToDb()

routes(app)
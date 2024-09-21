import express from "express"
import connectToDb from "./database/config/connect.js"

export const app = express()

connectToDb()
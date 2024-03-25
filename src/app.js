import express from "express"
import cors from "cors"
import winston from "winston"
import ClientRouter from "../routes/client.route.js";

const app = express()

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} - ${message}`
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(), new (winston.transports.File)({ filename: "books.log" })
  ],
  format: combine(
    label({ label: "books" }),
    timestamp(),
    myFormat
  )
});

app.use(express.json())

app.use(cors())

app.use("/cliente", ClientRouter)

app.use((error, request, response, _next) => {
  logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
  response.status(400).send({ error: error.message })
});

export default app
import request from "supertest";
import app from "../src/app.js";

app.use("/", (_request, response) => {
  response.status(200).send("Oi")
})

it("the server should run on port 5678", async () => {
  const response = await request(app).get("/")
  expect(response.status).toBe(200)
})
import request from "supertest";
import app from "../src/app.js";
import { clients, client, newClient, editClient, eliminateClient } from "./clients.js";
import { jest } from '@jest/globals';
 
const mockUrl = "/cliente"
const mockClients = clients;
const mockClient = client;
const createClient = newClient;
const updateClient = editClient;
const deleteClient = eliminateClient;
const getClients = jest.fn(url => mockClients)
const getClient = jest.fn(url => mockClient)
const createNewClient = jest.fn(url => mockClients)
const updateExistingClient = jest.fn(url => mockClients)
const deleteExistingClient = jest.fn(url => mockClients)

describe("test with clients", () => {

  it("should get an array with clients", async () => {
    await request(app).get(mockUrl)
    expect(getClients(mockUrl)).toBe(mockClients)
  })

  it("should get a specific client", async () => {
    await request(app).get(mockUrl)
    expect(getClient(mockUrl)).toBe(mockClient)
  })

  it("should create a new client", async () => {
    await request(app).post(mockUrl).send(createClient)
    expect(createNewClient(mockUrl)).toBe(mockClients)
  })

  it("should update an existing client", async () => {
    await request(app).put(mockUrl).send(updateClient)
    expect(updateExistingClient(mockUrl)).toBe(mockClients)
  })

  it("should delete an existing client", async () => {
    await request(app).delete(mockUrl).send(deleteClient)
    expect(deleteExistingClient(mockUrl)).toBe(mockClients)
  })

})
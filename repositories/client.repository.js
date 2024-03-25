import Client from "../models/client.model.js";

const createClient = async client => {
  try {
    return Client.create(client)
  } catch (error) {
    throw error
  }
}

const getClients = async () => {
  try {
    return Client.findAll()
  } catch (error) {
    throw error
  }
}

const getClient = async id => {
  try {
    return Client.findByPk(id)
  } catch (error) {
    throw error
  }
}

const updateClient = async client => {
  try {
    await Client.update(client, {
      where: {
        clienteId: client.clienteId
      }
    })
    return await getClient(client.clienteId)
  } catch (error) {
    throw error
  }
}

const deleteClient = async id => {
  try {
    await Client.destroy({
      where: {
        clientId: id
      }
    })
  } catch (error) {
    throw error
  }
}

export default {
  createClient,
  getClient,
  getClients,
  updateClient,
  deleteClient
}
import ClientService from "../services/client.service.js";

const createClient = async (request, response, next) => {
  try {
    let client = request.body;
    const wereTheFieldsInformed = !client.nome || !client.email || !client.senha || !client.telefone || !client.endereco

    if (wereTheFieldsInformed) {
      throw new Error("O preenchimento dos campos de nome, e-mail, senha, telefone e endereço é obrigatório.")
    }

    client = await ClientService.createClient(client)
    response.send(client)
    logger.info(`POST /cliente - ${JSON.stringify(client)}`)
  } catch (error) {
    next(error)
  }
}

const getClients = async (_request, response, next) => {
  try {
    response.send(await ClientService.getClients())
    logger.info(`GET /cliente`)
  } catch (error) {
    next(error)
  }
}

const getClient = async (request, response, next) => {
  try {
    response.send(await ClientService.getClient(request.params.id))
    logger.info(`GET /cliente/${request.params.id}`)
  } catch (error) {
    next(error)
  }
}

const updateClient = async (request, response, next) => {
  try {
    let client = request.body;
    const wereTheFieldsInformed = !client.clienteId || !client.nome || !client.email || !client.senha || !client.telefone || !client.endereco

    if (wereTheFieldsInformed) {
      throw new Error("O preenchimento dos campos de id do cliente, nome, e-mail, senha, telefone e endereço é obrigatório.")
    }

    client = await ClientService.updateClient(client)
    response.send(client)
    logger.info(`PUT /cliente - ${JSON.stringify(client)}`)
  } catch (error) {
    next(error)
  }
}

const deleteClient = async (request, response, next) => {
  try {
    await ClientService.deleteClient(request.params.id)
    response.end()
    logger.info(`DELETE /cliente/${request.params.id}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createClient,
  getClient,
  getClients,
  updateClient,
  deleteClient
}
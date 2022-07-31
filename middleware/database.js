import { MongoClient } from "mongodb"
import nextConnect from "next-connect"

const url = 'mongodb+srv://mika:azerty@cluster0.5cwg1.mongodb.net'
const client = new MongoClient(url)
const dbname = 'm1k431'

async function database(req, res, next) {
  if (!client.isConnected) await client.connect()
  req.dbClient = client
  req.db = client.db(dbname)
  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
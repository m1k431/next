import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const maCollection = await req.db.collection('brickBreaker')
  const cursorInTab = await maCollection.find({}).toArray()

  console.log(cursorInTab)
  res.json(cursorInTab)
})

export default handler
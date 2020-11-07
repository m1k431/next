import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const maCollection = await req.db.collection('brickBreaker')
  const cursorInTab = await maCollection.find().sort({ score: -1 }).toArray()
  console.log(cursorInTab)
  res.json(cursorInTab)
})

handler.post(async (req, res) => {
  if (req.body.visitorName) {
    const maCollection = await req.db.collection('brickBreaker')
    const doc = { visitorName: req.body.visitorName, score: req.body.score }
    console.log(req.body.visitorName + 'score: ' + req.body.score)
    console.log(doc)
    const result = await maCollection.insertOne(doc)
    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    )
    res.json(doc)
  }
})
export default handler
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const maCollection = await req.db.collection('brickBreaker')
  if (req.method === 'POST') {
    const doc = { visitorName: req.body.visitorName, score: req.body.score }
    console.log(req.body.visitorName + 'score: ' + req.body.score)
    console.log(doc)
    console.log(req.body)
    const result = await maCollection.insertOne(doc)
    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    )
  }
  else {
    const cursorInTab = await maCollection.find({}).toArray()
    console.log(cursorInTab)
    res.json(cursorInTab)
  }
})

export default handler
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const cursor = await req.db.collection('brickBreaker').find({})
    var cart = []
    console.log("async")
    for await (const doc of cursor) {
    console.log(doc)
    cart.push(doc)
  }
  res.json(cart)
});

export default handler;
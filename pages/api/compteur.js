const redis = require("redis");
const {promisify} = require('util');

module.exports = async(req, res) => {
    const client = redis.createClient ({
        url : "redis://f2ecbd1bc9b0436cbde0298f528f0119@eu1-secure-polecat-30586.lambda.store:30586"
    });
    const incrAsync = promisify(client.incr).bind(client);
    const count = await incrAsync("compteur")

    client.quit()

    res.json({
        body: JSON.stringify(count)
    })
}
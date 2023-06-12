const red = require("redis")

const redis = red.createClient();

redis.on("connect",async()=>{
    console.log("connected to redis")
})

red.on("error",(err)=>{
    console.log(err.message);
})

redis.connect();

module.exports = {
    redis
}
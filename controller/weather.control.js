const axios = require("axios");
const { redis } = require("../config/redis");
const { winstonLogger } = require("../middlewares/winston");


const getWeather = async (req,res)=>{
    try{
        const {ip} = req.query;
        const existedData = await redis.get(`${ip}`);
        if(existedData){
            return res.status(200).send({data:JSON.parse(existedData)});
        } 
        const {data} = await axios.get(`http://weatherapi.co/${req.query.ip}/json`);
        await redis.set(`${ip}`,JSON.stringify(data),"EX",60*60*5)
        res.status(200).send({data})
    }catch(err){
       winstonLogger.error(err.message);
       res.status(400).send({msg:err.message}) 
    }
}

module.exports ={
    getWeather
}
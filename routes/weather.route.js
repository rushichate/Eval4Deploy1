const { getWeather } = require("../controller/weather.control");
const { validate } = require("../middlewares/validate");

const weatherRouter = require("express").Router();

weatherRouter.get("/getweather",validate,getWeather)



module.exports = {
    weatherRouter
}
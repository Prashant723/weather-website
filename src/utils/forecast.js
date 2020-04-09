const request = require('request')

const forecast = (latitude,longitude,callback)=>{

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=e68a9006986013f2a1a604fefc7b61aa'

request({url:url,json:true},(error,response)=>{
    if(error){
        callback('unable to connec to weather services',undefined)
    }else if(response.body.error){
        callback('try another search',undefined)
       }else{
           callback(undefined,response.body)
       }
   })

}

module.exports = forecast
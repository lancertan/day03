//load the fetch and with-query
const fetch = require('node-fetch')
const withQuery = require('with-query').default

const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '531217002ed827f83385cc4b81e66049'

//construct the URL
const url = withQuery(
    ENDPOINT,
    {
        q: 'singapore',
        appid: API_KEY
    }
)

//const getWeather = async function(city, apiKey) {}
const getWeather = async (city, apiKey) => {
    const url = withQuery(
        ENDPOINT,
        {
            q: city,
            appid:apiKey
        }
    )
    let result = await fetch(url)

    try{
        const weather = await result.json()
    } catch (e){
        console.error(`ERROR: `, e)
        return Promise.reject(e)
    }


    // then (result => {})
 //   const result = await fetch(url)

    // then (result => {})
 //   const weather = await result.json()

    return Promise.resolve(weather)
}

//returs a promise
try{
    getWeather('singapore', API_KEY)
    .then(weather => {
        console.info('the weather: ',weather)
    })
} catch (e){}
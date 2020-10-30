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

console.info('url = ', url.toString())

const p = fetch(url) 
p.then(result => {
        return result.json()
})
.then(result => {
    console.info('The weather')
    console.info(result)
})
.catch(e => {
    console.info('error')
    console.error('error: ',e)
})
/*
p
.then(result => {
    console.info('Promise resolved')
    console.info('result: ', result)
    const p = result.json()
    p.then(data => {
            console.info('the weather')
            console.info(data)
    }).catch(e => {
        console.info('error')
        console.info('error: ', e)
    })
})
.catch(err => {
    console.info('Promise rejected')
    console.error('error: ', err)
})
*/
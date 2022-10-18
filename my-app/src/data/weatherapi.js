import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
const apiKey = '38e7eb14b397d40b4a042564a33ffd72'

export const getWeatherData = async (cityname) => {
  try {
    const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`)
    return data
  } catch (error) {
    throw error
  }
}
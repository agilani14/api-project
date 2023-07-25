import fetch from 'node-fetch'
import { promises as fsPromises } from 'fs'

fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
  .then(response => response.json())
  .then(data => fsPromises.writeFile("./space.json", JSON.stringify(data)))

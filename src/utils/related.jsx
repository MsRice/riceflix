import axios from "axios"

const BASE_URL = 'https://api.themoviedb.org/3'
const DISC_URL = 'https://api.themoviedb.org/3/discover/movie'

async function fecthCategories(url , parameters){

  const options = {
    method: 'GET',
    url: url,
    params: parameters,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDE5MmE0OWUyZjM0MDRiYWJkMTcxMGIxZGY1YTA5ZSIsIm5iZiI6MTczMTkwNDIyNi4wMDIxMTk1LCJzdWIiOiI2NzMyZGM2YTg1NWNiYjRlNDhmNjcxMjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AGry0-itvxVrRG6LeUuDunsG4a4uP305KwKkihiFKAc'
    }
  }

  const category = await axios
    .request(options)
    .then(res => res.data)
    // .catch(err => console.error(err));



    return category
    
  }
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
  // const actionMovie = await fecthCategories(DISC_URL)
  // console.log('categories' , actionMovie.results)

const requests = {
  trendingAll: await fecthCategories(`${BASE_URL}/trending/all/week` ,{language: 'en-US', page: '1'}),
  trendingTV: await fecthCategories(`${BASE_URL}/trending/tv/day` ,{language: 'en-US', page: '1'}),
  topRatedMovies : await fecthCategories('https://api.themoviedb.org/3/movie/top_rated', {language: 'en-US', page: '1'}),
  actionMovies : await fecthCategories(DISC_URL, {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    sort_by: 'popularity.desc',
    with_genres: 28
  }),
  comdeyMovies : await fecthCategories(DISC_URL,{
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    sort_by: 'popularity.desc',
    with_genres: 35
  }),
  horrorMovies : await fecthCategories(DISC_URL,{
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    sort_by: 'popularity.desc',
    with_genres: 27
  }),
  romanceMovies : await fecthCategories(DISC_URL,{
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    sort_by: 'popularity.desc',
    with_genres: 10749
  }),
  documentaries : await fecthCategories(DISC_URL,{
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    sort_by: 'popularity.desc',
    with_genres: 99
  })

}

console.log(requests)
//   fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
//   fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
//   fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
//   fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
//   fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
// }

export default requests
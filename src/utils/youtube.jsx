async function yt_embed(id) {
    
    console.log(id)
    let global_key = 'stllDB4 Polin'
    const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDE5MmE0OWUyZjM0MDRiYWJkMTcxMGIxZGY1YTA5ZSIsIm5iZiI6MTczMjQ2MDk3OC4zODcyNzYsInN1YiI6IjY3MzJkYzZhODU1Y2JiNGU0OGY2NzEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UiUZa8zuts5Rg2wweeIxpqp7XQXU0ZaK3UY0DbJ2DhE'
        }
    };

    async function fetchDetails(tmdb_id) {
        const response = await fetch(BASE_URL, options)
        const data = await response.json()
        // .then(res => res.json())
        // .then(res =>{
        //    console.log(res.results)
        // })
        return data.results 
        
    }   

    async function main() {
        const youtube_dict = await fetchDetails(id)
        const filter = youtube_dict.filter((elem) => elem.name === "Official Trailer")
        
        global_key = filter[0].key
        console.log(global_key)
        return global_key
    }

    global_key = await main()
    return {global_key}
}


export default yt_embed
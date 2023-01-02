import './Movie.scss'
import { Link } from 'react-router-dom'
// import data from "./recources/imdb_top_1000.json"
//"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg"
const Movie = () => {
    return (
        <div className="list">
            <img src={''} alt="" />
            <Link className="movieTitle" to="/top100/1">1. The Shawshank Redemption (1994)</Link>
            <p className="rating">IMDb: 9.3  Meta Score: 80%</p>
        </div>
    )
}

export default Movie

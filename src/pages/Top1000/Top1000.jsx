import './Top1000.scss'
import Movie from  '../../components/Movie/Movie'
const Top1000 = () => {
    return (
        <div className="top">
            <div className="bigCard">
                <h1>TOP 1000</h1>
                <h3>These are best movies by rating in IMDb!</h3>
                <Movie></Movie>
            </div>
        </div>
    )
}

export default Top1000

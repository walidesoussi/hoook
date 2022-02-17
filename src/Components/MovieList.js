
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

const MovieList = (props) => {
    const Movies=[...props.movieArray]
    console.log(Movies)
    return (
<div className='movieCard'>
    <div className='movieList'>
    <div className='wrapp'>
{Movies.map(movie => (
  <div>
  <MovieCard title={movie.title} myimage={movie.img} stars={movie.stars} text={movie.bio} />
  </div>))}

</div>


  
</div>
</div>)}
export default MovieList

import { v4 as uuidv4 } from "uuid";
import {useState} from 'react'
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import MyVerticallyCenteredModal from "./Components/Modal";
const App = () => {

    const [Movies,setMovies]= useState([
        {
          id: uuidv4(),
          title: "Avengers: Endgame",
          bio: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.",
          img: "https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
          stars: 3,
          trailer: "//www.youtube.com/embed/TcMBFSGVi1c",
        },
        {
          id: uuidv4(),
          title: "Avengers: Infinity war",
          bio: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
          img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
          stars: 4,
          trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
        },
        {
          id: uuidv4(),
          title: "Luca",
          bio: "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.o",
          img: "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
          stars: 3,
          trailer: "https://www.youtube.com/embed/mYfJxlgR2jw",
        },
      
        {
          id: uuidv4(),
          title: "Stowaway",
          bio: "A stowaway on a mission to Mars sets off a series of unintended consequences.",
          img: "https://m.media-amazon.com/images/M/MV5BMWYwMWQxMmUtNjU3MS00NjIwLTllYWMtNzcxYzRkMWYyYTkwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
          stars: 4,
          trailer: "https://www.youtube.com/embed/A_apvQkWsVY",
        },
        {
          id: uuidv4(),
          title: "Mortal Kombat",
          bio: "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
          img: "https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
          stars: 1,
          trailer: "https://www.youtube.com/embed/NYH2sLid0Zc",
        },
        {
          id: uuidv4(),
          title: "Spiral",
          bio: "A criminal mastermind unleashes a twisted form of justice in Spiral, the terrifying new chapter from the book of Saw.",
          img: "https://m.media-amazon.com/images/M/MV5BZjI4ZWQwYzctMGJlMi00OTE1LWFkNjMtY2VlOGQxZmVhNDYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
          stars: 2,
          trailer: "https://www.youtube.com/embed/gzy6ORqE9IY",
        },
        {
          id: uuidv4(),
          title: "Friends: The Reunion",
          bio: "An unscripted Friends reunion special.",
          img: "https://www.ecranlarge.com/uploads/image/001/378/friends-the-reunion-affiche-1378625.jpg",
          stars: 3,
          trailer: "https://www.youtube.com/embed/HRXVQ77ehRQ",
        },
      ])

      const [SearchTerm, setSearchTerm] = useState("");
      const [Rate, setRate] = useState(0);
      const [modal, setModal] = useState(false);

  const rating = (r) => {
    setRate(r);
  };
  const getTitle = (t) => {
    setSearchTerm(t);
  };
  const movieAddhandler = (addMovies) => {
    setMovies([...Movies, addMovies]);
  };
  const handleModal = (m) => {
    setModal(m);
  };
  console.log(Rate);
    return (
        <div className="App">
            <header>
          <Filter titre={getTitle} rate={rating} modalShow={handleModal} />
      </header>
      <main>
        <MovieList
          movieArray={Movies.filter(
            (movie) =>
              movie.title.toLowerCase().match(SearchTerm.toLowerCase().trim()) &&
              movie.stars >= Rate
          )}
        />
        <MyVerticallyCenteredModal
            show={modal}
            onHide={() => setModal(false)}
            addMovie={movieAddhandler}
          />
        </main>
        <footer>
          <h6> all rights reserved </h6>
        </footer>
        </div>
    )
}

export default App


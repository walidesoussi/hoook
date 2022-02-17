import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-star-rating-component";
import "../App.css";


const MovieCard = ({myimage,stars,title,text}) => {
    return (
      <div className="movieCard">
        <Card className="container" style={{ width: "14rem" }}>
          <Card.Img
            style={{ width: "192px", height: "284.150px" }}
            className="image"
            variant="top"
            src={myimage}
          />
          <Card.Body>
            <ReactStars
              name="star3"             
              starCount={5}
              editing={false}
              value={stars}
            />
            <div className="overlay1">
              <div className="text">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  };
  export default MovieCard;
  
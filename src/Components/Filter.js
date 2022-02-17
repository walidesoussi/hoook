import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import StarRatingComponent from "react-star-rating-component";

import Button from "react-bootstrap/Button";


const Filter = ({title,rate,modalShow}) => {
    return (
        <Navbar bg="dark" expand="lg">
      
      
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <div className="container-3">
            <Button
              style={{ marginRight: "10px", height: "40px", backgroundColor:"green" }}
              variant="primary"
              onClick={() => modalShow(true)}
            >
              +ADD MOVIES
            </Button>

            <div className="container-2">
              <FormControl
                type="text"
                placeholder="Search Movies"
                className="prompt"
                onChange={(e) => title(e.target.value)}
              />
              <StarRatingComponent
                name="star"
                starCount={5}
                onStarClick={(r) => rate(r)}
              />
            </div>
          </div>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Filter

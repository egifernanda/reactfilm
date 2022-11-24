import { Card, Col, Container, Row } from "react-bootstrap";
import bp2 from "../assets/images/superhero/blackpanther2.jpg";
import sria from "../assets/images/superhero/sriasih.jpg";
import drs2 from "../assets/images/superhero/drstrange2.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Superhero Movies</h1>
        <Row>
          <Col md={4} className="MovieWrapper" id="superhero">
            <Card className="bg-dark text-white MovieImage">
              <Card.Img src={bp2} alt="Card image" className="ImageCard" />
              <Card.Title className="text-center">Black Panther 2</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="bg-dark text-white MovieImage">
              <Card.Img src={sria} alt="Card image" className="ImageCard" />
              <Card.Title className="text-center">Black Panther 2</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="bg-dark text-white MovieImage">
              <Card.Img src={drs2} alt="Card image" className="ImageCard" />
              <Card.Title className="text-center">Black Panther 2</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;

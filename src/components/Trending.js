import { Card, Col, Container, Row } from "react-bootstrap";
import bp2 from "../assets/images/trending/blackpanther2.jpg";
import sria from "../assets/images/trending/sriasih.jpg";
import ava2 from "../assets/images/trending/avatar2.png";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Trending Movies</h1>
        <Row>
          <Col md={4} className="MovieWrapper" id="trending">
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
              <Card.Img src={ava2} alt="Card image" className="ImageCard" />
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

export default Trending;

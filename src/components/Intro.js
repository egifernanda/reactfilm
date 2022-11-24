import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">Jadwal Film</div>
            <div className="title">Streaming</div>
            <div className="introButton mt-4 text-center"></div>
            <Button variant="dark">Lihat Semua List</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;

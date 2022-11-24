import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">Jamiak Movie</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Superhero</Nav.Link>
            <Nav.Link href="#superhero">Trending</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

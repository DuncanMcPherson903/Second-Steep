import { Container, Row, Col, Stack, Image, Nav, NavLink } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="text-white p-4">
          <Col className="mx-5">
            <Stack>
              <Image src="/images/LogoTemp.jpg" alt="VM logo" rounded width={150} height={150} />
              <Image src="/images/LogoTextWhite.png" alt="VM logo" rounded width={150} height={50} />
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              Useful Links
              <NavLink href="/" className="text-white">
                Home
              </NavLink>
              <NavLink href="#" className="text-white">
                About
              </NavLink>
              <NavLink href="#" className="text-white">
                Services
              </NavLink>
              <NavLink href="#" className="text-white">
                Join the Newsletter!
              </NavLink>
            </Nav>
          </Col>
          <Col>
            <h5>Contact us!</h5>
            <hr />
            <p>123 Sesame Street</p>
            <p>secondsteep@yahoo.com</p>
            <p>+ 1 615 555 5555</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

import { Link } from "react-router-dom"; //
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container className="ps-4">
        <Link to="/">
          <span className="fs-3 header-logo">
            <i className="fa-solid fa-clapperboard text-light fs-4 me-2"></i>
            Hackflix
          </span>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ background: "#d8d8d8" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="d-flex align-items-center navbar-item mx-4">
              Home
            </Link>
            <Link
              to="/search-title"
              className="d-flex align-items-center navbar-item mx-4"
            >
              Search by title
            </Link>
            <Link
              to="/search-rating"
              className="d-flex align-items-center navbar-item mx-4"
            >
              Search by rating
            </Link>
            <Link
              to="/about"
              className="d-flex align-items-center navbar-item mx-4"
            >
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

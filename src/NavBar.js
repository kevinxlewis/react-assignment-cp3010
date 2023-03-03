import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// Main navigation component
const NavBar = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
            <Navbar.Brand href="/">Film Central</Navbar.Brand>
            <Link to='/'>Movies</Link>
            <Link to="/MovieReview">Review a Movie</Link>
            </Container>
        </Navbar>
    );
}

export default NavBar; 
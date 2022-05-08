import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth)

    const handleSignout = () => {
        signOut(auth)
    }

    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">SAWARI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link}  to="/">Home</Nav.Link>
                            <Nav.Link as={Link}  to="/service">Stocks</Nav.Link>
                            {
                                user ? 
                            <Nav.Link as={Link}  to="/myitems">My Items</Nav.Link> :
                            ''
                            }
                            {
                                user ? 
                            <Nav.Link as={Link}  to="/additems">Add Items</Nav.Link> :
                            ''
                            }
                            {
                                user ? 
                            <Nav.Link as={Link}  to="/manageitems">Manage Items</Nav.Link> :
                            ''
                            }
                            <Nav.Link as={Link}  to="/blog">Blog</Nav.Link>
                        </Nav>

                        <Nav>
                        {
                            user ? <button onClick={handleSignout} className='btn btn-danger'>sign out</button> :
                                <Nav.Link className='btn btn-white' as={Link} to="login">Log In</Nav.Link>}

                        {
                            user ? '' : 
                            <Nav.Link as={Link}  to="/register">Register</Nav.Link>

                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
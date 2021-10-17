import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Header.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img className="w-25" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/cart" className="fw-normal pt-2 text-black">{cartIcon}</NavLink>

                            {user?.email && <Navbar.Text>
                                Signed in as: <a href="#login">{user.displayName}</a>
                            </Navbar.Text>}
                            {user?.email ? <button className="logout_btn" onClick={logOut}>Logout</button>
                                :
                                <div>
                                    <Link to="/login">
                                        <Button className="btn-login text-decoration-none ms-3  fw-normal">Login</Button>
                                    </Link>
                                    <Link to="/signup">
                                        <Button className="btn-sign ms-3 px-4 rounded-pill">Sign up</Button>
                                    </Link>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;
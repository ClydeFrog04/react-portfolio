import React, {useState} from "react"
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">FORC</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="link" to="/projects">Projects</Link>
                        </NavItem>
                    </Nav>
                    <NavbarText>Randal Egan</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
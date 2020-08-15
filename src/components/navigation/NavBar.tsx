import React, {useContext, useState} from "react"
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";
import DelayLink from "../utils/DelayLink";
import {PortfolioContext} from "../../contexts/portfolioContext";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {setChangingPages} = useContext(PortfolioContext);
    const toggle = () => {
        console.log("Navbar toggle called");
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar color="light" light expand="md">
                {/*<DelayLink*/}
                {/*    to="/"*/}
                {/*    delay={1000}*/}
                {/*>*/}
                {/*    <NavbarBrand>FORC</NavbarBrand>*/}
                {/*</DelayLink>*/}
                {/*<NavbarBrand>*/}
                    <DelayLink
                        className="link navbar-brand"
                        to="/" delay={1000}
                        onDelayStart={() => setChangingPages(true)}
                        onDelayEnd={() => setChangingPages(false)}
                    >FORC</DelayLink>
                {/*</NavbarBrand>*/}
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
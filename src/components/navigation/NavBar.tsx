import React, {useContext, useState} from "react"
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";
import DelayLinkClass from "../utils/DelayLinkClass";
import {PortfolioContext} from "../../contexts/portfolioContext";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {setChangingPages, history} = useContext(PortfolioContext);
    const toggle = () => {
        console.log("Navbar toggle called");
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar color="light" light expand="md">
                    <DelayLinkClass
                        className="link navbar-brand"
                        to="/"
                        delay={1000}
                        onDelayStart={() => setChangingPages(true)}
                        onDelayEnd={() => setChangingPages(false)}
                        history={history}
                    >FORC</DelayLinkClass>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <DelayLinkClass
                                className="link"
                                to="/projects"
                                delay={1000}
                                onDelayStart={() => setChangingPages(true)}
                                onDelayEnd={() => setChangingPages(false)}
                                history={history}
                            >Projects</DelayLinkClass>
                        </NavItem>
                    </Nav>
                    <NavbarText>Randal Egan</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
import React, {useContext} from "react"
import {Container, Fade} from "reactstrap";
import NavBar from "../navigation/NavBar";


const LandingPage = () => {


    return (
        <>
            <NavBar/>
            <Container className="landingPage bg-dark text-white myFade">

                Welcome to my site
            </Container>
        </>
    );
}

export default LandingPage;
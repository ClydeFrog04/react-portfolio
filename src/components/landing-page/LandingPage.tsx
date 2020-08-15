import React, {useContext, useEffect, useState} from "react"
import {Container, Fade} from "reactstrap";
import NavBar from "../navigation/NavBar";
import {PortfolioContext} from "../../contexts/portfolioContext";


const LandingPage = () => {

    const [preload, setPreload] = useState(true);
    const {changingPages} = useContext(PortfolioContext);
    useEffect(() => {
        window.setTimeout(() =>{
            setPreload(false);
        }, 500);//todo: this timeout must be greater than 0 but shorter than the animation duration
    },[]);

    const preloadClass = `${preload ? "preload" : ""}`;
    const fadeOutClass = `${changingPages ? "fadeout" : ""}`;
    return (
        <>
            <NavBar/>
            <Container className={`${preloadClass} ${fadeOutClass} landingPage bg-dark text-white myFade`}>

                Welcome to my site
            </Container>
        </>
    );
}

export default LandingPage;
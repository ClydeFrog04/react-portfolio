import React, {useContext, useEffect, useState} from "react"
import {Container, Fade} from "reactstrap";
import NavBar from "../navigation/NavBar";
import {PortfolioContext} from "../../contexts/portfolioContext";
import {gsap, Power1} from "gsap";


const LandingPage = () => {
    const {changingPages} = useContext(PortfolioContext);

    const fadeClass = `${changingPages ? "fadeout" : "fadein"}`;

    const tl = gsap.timeline();
    useEffect(()=>{
        console.log(fadeClass);
        if(fadeClass === "fadein") {
            tl.set(".fadein", {autoAlpha: 0});
            tl.to(".fadein", {duration: 0.5, autoAlpha: 1, repeat: 0, ease:"power2.in"});
        }else {
            tl.set(".fadeout", {autoAlpha: 1});
            tl.to(".fadeout", {duration: 0.5, autoAlpha: 0, repeat: 0, ease:"power2.in"});
        }
    },[changingPages]);

    return (
        <>
            <NavBar/>
            <Container className={`landingPage bg-dark text-white ${fadeClass}`}>
                Welcome to my site
            </Container>
        </>
    );
}

export default LandingPage;
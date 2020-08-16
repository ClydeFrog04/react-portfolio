import React, {useContext, useEffect, useState} from "react"
import {PortfolioContext} from "../../contexts/portfolioContext";


const LandingPage = () => {

    const [preload, setPreload] = useState(true);
    const {changingPages} = useContext(PortfolioContext);
    useEffect(() => {
        window.setTimeout(() =>{
            setPreload(false);
        }, 500);
    },[]);

    const preloadClass = `${preload ? "preload" : ""}`;
    const fadeOutClass = `${changingPages ? "fadeout" : ""}`;
    return (
        <div className={`${preloadClass} ${fadeOutClass} landingPage bg-dark text-white myFade`}>
             landing page!
        </div>
    );
}

export default LandingPage;
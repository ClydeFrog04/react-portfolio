import React, {useContext, useEffect, useState} from "react"
import {PortfolioContext} from "../../contexts/portfolioContext";


const ProjectPage = () => {
    const [preload, setPreload] = useState(true);
    const {changingPages} = useContext(PortfolioContext);
    useEffect(() => {
        window.setTimeout(() =>{
            setPreload(false);
        }, 500);
    },[]);

    const {projects} = useContext(PortfolioContext);

    const preloadClass = `${(preload || changingPages) ? "preload" : ""}`;
    const fadeOutClass = `${changingPages ? "fadeout" : ""}`;
    return (
        <div className={`${preloadClass} ${fadeOutClass} bg-dark text-white myFade projectPage`}>
            project page
        </div>
    );
}

export default ProjectPage;
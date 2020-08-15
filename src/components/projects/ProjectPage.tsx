import React, {useContext, useEffect, useState} from "react"
import {Container} from "reactstrap";
import {IProject} from "../../interfaces/projectInterfaces";
import ProjectCard from "./ProjectCard";
import {PortfolioContext} from "../../contexts/portfolioContext";
import NavBar from "../navigation/NavBar";


const ProjectPage = () => {
    const [preload, setPreload] = useState(true);
    const {changingPages} = useContext(PortfolioContext);
    useEffect(() => {
        window.setTimeout(() =>{
            setPreload(false);
        }, 1000);//todo: this timeout must be greater than 0 but shorter than the animation duration
    },[]);

    const {projects} = useContext(PortfolioContext);

    const preloadClass = `${preload ? "preload" : ""}`;
    const fadeOutClass = `${changingPages ? "fadeout" : ""}`;
    return (
        <>
            <NavBar/>
            <Container className={`${preloadClass} ${fadeOutClass} bg-dark text-white myFade`}>

                {projects.map((project: IProject) => {
                    return (
                        <ProjectCard
                            images={project.images}
                            description={project.description}
                            numContributors={project.numContributors}
                            projectName={project.name}
                            role={project.role}
                            timeSpent={project.timeSpent}
                            key={project.images[0].src}
                        />
                    );
                })}
            </Container>
        </>
    );
}

export default ProjectPage;
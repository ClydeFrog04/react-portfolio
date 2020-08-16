import React, {useContext, useEffect, useState} from "react"
import {Container} from "reactstrap";
import {IProject} from "../../interfaces/projectInterfaces";
import ProjectCard from "./ProjectCard";
import {PortfolioContext} from "../../contexts/portfolioContext";
import NavBar from "../navigation/NavBar";
import {gsap} from "gsap";


const ProjectPage = () => {
    const {projects, changingPages, animationDuration} = useContext(PortfolioContext);

    const fadeClass = `${changingPages ? "fadeout" : "fadein"}`;

    const tl = gsap.timeline();
    useEffect(()=>{
        console.log(fadeClass);
        if(fadeClass === "fadein") {
            tl.set(".fadein", {autoAlpha: 0});
            tl.to(".fadein", {duration: animationDuration, autoAlpha: 1, repeat: 0, ease:"power2.in"});
        }else {
            tl.set(".fadeout", {autoAlpha: 1});
            tl.to(".fadeout", {duration: animationDuration, autoAlpha: 0, repeat: 0, ease:"power2.out"});
        }
    },[changingPages]);
    return (
        <>
            <NavBar/>
            <Container className={`projectPage bg-dark text-white ${fadeClass}`}>

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
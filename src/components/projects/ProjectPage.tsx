import React, {useContext} from "react"
import {Container} from "reactstrap";
import {IProject} from "../../interfaces/projectInterfaces";
import ProjectCard from "./ProjectCard";
import {PortfolioContext} from "../../contexts/portfolioContext";
import NavBar from "../navigation/NavBar";


const ProjectPage = () => {

    const {projects} = useContext(PortfolioContext);

    return (
        <>
            <NavBar/>
            <Container className="bg-dark text-white myFade">

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
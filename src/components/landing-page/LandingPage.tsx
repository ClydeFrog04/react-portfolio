import React, {useContext} from "react"
import {Container, Fade} from "reactstrap";
import {PortfolioContext} from "../../contexts/portfolioContext";
import ProjectCard from "../project-card/ProjectCard";
import {IProject} from "../../interfaces/projectInterfaces";


const LandingPage = () => {
    const {projects} = useContext(PortfolioContext);


    return (
            <Container className="bg-dark text-white landingFade">
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
    );
}

export default LandingPage;
import React, {useContext} from 'react';
import './App.css';
import {PortfolioContext} from "./contexts/portfolioContext";
import {IProject} from "./interfaces/projectInterfaces";
import ProjectCard from "./components/ProjectCard";

function App() {
    const {projects} = useContext(PortfolioContext);

    return (
        <div className="App text-center">
            {projects.map((project: IProject) => {
                return (
                    <ProjectCard
                        imgSrc={project.imgSrc}
                        description={project.description}
                        numContributors={project.numContributors}
                        projectName={project.name}
                        role={project.role}
                        timeSpent={project.timeSpent}
                    />
                );
            })}
        </div>
    );
}

export default App;

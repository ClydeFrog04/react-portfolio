import React, {useContext} from 'react';
import './App.css';
import {PortfolioContext} from "./contexts/portfolioContext";
import {IProject} from "./interfaces/projectInterfaces";
import ProjectCard from "./components/project-card/ProjectCard";

function App() {
    const {projects} = useContext(PortfolioContext);

    return (
        <div className="App text-center">

            {projects.map((project: IProject) => {
                // @ts-ignore
                return (
                    <ProjectCard
                        images={project.images}
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

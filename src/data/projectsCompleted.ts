//eventually I plan to make a backend for this, but I don't have that right now!
import {IProject} from "../interfaces/projectInterfaces";
import sfr from "../assets/sfr/SFR.png";
import quizApp from "../assets/quizapp/QuizPage.png";
import startPage from "../assets/quizapp/StartPage.png";

export const projectsCompleted:IProject[] =[
    {
        images: [{src: quizApp, alt: "A trivia quiz game"}, {src: startPage, alt: "A trivia quiz game"}],
        name: "quizApp",
        timeSpent: "1 month",
        numContributors: 7,
        role:"State Management",
        description: "A trivia quiz game with many game settings so the player never gets bored playing.",
    },
    {
        images: [{src: sfr, alt:"A family recipe website"}],
        name: "Secret Family Recipes",
        timeSpent: "2 weeks",
        numContributors: 4,
        role:"State management, connect frontend to backend",
        description: "A place to store all your favorite recipes that might be on loose paper and at risk of loss!",
    }
]


/*
{projects.map((project: IProject) => {
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
 */
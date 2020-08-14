//eventually I plan to make a backend for this, but I don't have that right now!
import {IProject} from "../interfaces/projectInterfaces";
import sfr from "../assets/SFR.png";

export const projectsCompleted:IProject[] =[
    {
        name: "quizApp",
        timeSpent: "1 month",
        numContributors: 7,
        role:"State Management",
        description: "A trivia quiz game with many game settings so the player never gets bored playing.",
    },
    {
        imgSrc: sfr,
        name: "Secret Family Recipes",
        timeSpent: "2 weeks",
        numContributors: 4,
        role:"State management, connect frontend to backend",
        description: "A place to store all your favorite recipes that might be on loose paper and at risk of loss!",
    }
]
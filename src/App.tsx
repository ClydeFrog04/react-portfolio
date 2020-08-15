import React from 'react';
import './App.css';
import LandingPage from "./components/landing-page/LandingPage";
import {Switch, Route} from "react-router-dom";
import ProjectPage from "./components/projects/ProjectPage";

function App() {


    return (
        <div className="App text-center">
            <Switch>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
                <Route path="/projects">
                    <ProjectPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

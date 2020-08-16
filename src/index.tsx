import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {PortfolioProvider} from "./contexts/portfolioContext";
import {BrowserRouter as Router} from "react-router-dom";
import {gsap} from "gsap";
import {CSSPlugin} from "gsap/CSSPlugin";

//force CSSPlugin to not be dropped during build
gsap.registerPlugin(CSSPlugin);

ReactDOM.render(
    <Router>
        <PortfolioProvider>
            <App/>
        </PortfolioProvider>
    </Router>,

    document.getElementById('root')
);

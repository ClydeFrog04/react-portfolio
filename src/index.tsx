import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import {PortfolioProvider} from "./contexts/portfolioContext";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <PortfolioProvider>
            <App/>
        </PortfolioProvider>
    </Router>,

    document.getElementById('root')
);

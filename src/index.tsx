import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {PortfolioProvider} from "./contexts/portfolioContext";

ReactDOM.render(
    <PortfolioProvider>
        <App/>
    </PortfolioProvider>,
    document.getElementById('root')
);

import React, { Component } from 'react';
import PlanetListing from '../components/PlanetListing';
import styles from './styles.css';
import ViewArea from  '../components/ViewArea';
import { BrowserRouter as Router } from 'react-router-dom';
import PlanetView from '../components/PlanetView';
import { Menu } from 'semantic-ui-react';
import Home from '../components/Home';

export default class CoreLayout extends Component {
    render() {
        const routes = [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/:planet',
                exact: true,
                component: PlanetView
            }
        ]
        return <Router>
            <div className='layout'>
                <div className="left-nav">
                    <PlanetListing routes={ routes } />
                </div>
                <ViewArea routes={ routes } className="view-area" />
            </div>
        </Router>
    }
}

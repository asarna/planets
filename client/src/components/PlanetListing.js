import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class PlanetListing extends Component {
    render() {
        const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
        return <div>
            <Menu vertical>{ planets.map((planet, index) => {
                return <Menu.Item key={ index }>
                    <Link to={`/${planet}`} key={ index }> { planet } </Link>
                </Menu.Item>
                }) }
            </Menu>
        </div>
        
    }
}

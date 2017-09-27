import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

export default class ViewArea extends Component {
    render() {
        return <Container>
            { this.props.routes.map((route, index) => {
                return <Route 
                    exact={ route.exact } 
                    path={ route.path }
                    component={route.component} 
                    key={index}
                />
            })}
        </Container>
    }
}
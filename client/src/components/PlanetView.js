import React, { Component } from 'react';
import axios from 'axios';
import { getPlanet } from '../helpers/getPlanet';
import Gallery from './Gallery';


export default class PlanetView extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        data: []
      };
      this.getItems = this.getItems.bind(this);
    }

    getItems(planet) {
      const thisPlanet = this.props.match.params.planet;  
      getPlanet(planet).then((res) => {
        this.setState({
          data: res
        })
      });
    }

    componentWillMount() { 
      const thisPlanet = this.props.match.params.planet;  
      this.getItems(thisPlanet);
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.match.params.planet !== this.props.match.params.planet) {
        const thisPlanet = nextProps.match.params.planet;
        this.getItems(thisPlanet);
      }
    }

    render() {
      const { match: { params } } = this.props;
        return <div className='planet-view'>     
          <h2>{ params.planet }</h2>
          <Gallery items={ this.state.data } />
        </div>
    }
}
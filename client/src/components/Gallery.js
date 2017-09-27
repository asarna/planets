import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Gallery extends Component {
  render() {
    return <div>
      <Card.Group itemsPerRow={4}>
        { this.props.items && this.props.items.map((item, index) => {
          return <Card key={ index }>
             <Image src={ item.links[0].href } />
              <Card.Content>
                <Card.Header>
                  { item.data[0].title }
                </Card.Header>
                <Card.Description>
                  { item.data[0].description_508 }
                </Card.Description>
              </Card.Content>
          </Card>
        }) }
      </Card.Group>
    </div>   
  }
}
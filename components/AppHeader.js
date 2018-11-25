import React, { Component } from 'react';
import { Container, Header, Body, Right, Button, Icon, Title, Subtitle, Left } from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
      <Container>
        <Header transparent>
          <Left />
          <Body>
            <Title>Lotly</Title>
            <Subtitle>Global lottery on blockchain</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='ios-menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}


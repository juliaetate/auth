import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  state = { email: '' }; 

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label='Email'
            placeholder='user@gmail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

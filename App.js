import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Chat } from './components/Chat';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return <Chat />;
  }
}

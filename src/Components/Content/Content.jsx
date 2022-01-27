import React, { Component } from 'react';
import Header from './Header';
import './contentStyles.scss'
import Main from './Main';
export default class Content extends Component {
  render() {
    return <div>
        <Header name = {this.props.name} />
        <Main />
    </div>;
  }
}

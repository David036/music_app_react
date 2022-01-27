import React, { Component } from 'react';
import Nav from './Nav';
export default class Header extends Component {
  render() {
    return <div className='header'>
        <Nav name ={this.props.name} />
        <h1>NFTs by Curios Music</h1>
        <p>Own a one-of-a-kind and limited digital collectible</p>
        <button>Latest NFT drops</button>
    </div>;
  }
}

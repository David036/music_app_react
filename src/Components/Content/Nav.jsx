import React, { Component } from 'react';
import { Routes, Route , NavLink} from 'react-router-dom';
import Discover from './Discover';
export default class Nav extends Component {
  render() {
    return <div className='nav'>
      
        <div className="nav-section">
            <NavLink className='nav-item' to="/home">HOME</NavLink>
            <NavLink className='nav-item' to="/discover">DISCOVER</NavLink>
            <NavLink className='nav-item' to="/">MARKETPLACE</NavLink>
        </div>
        <h2>{this.props.name.name}</h2>
        <Routes>
            <Route path='/home' />
            <Route path='/discover' element={<Discover />}/>
            <Route path='/'/>
        </Routes>
    </div>;
  }
}

import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'
class Home extends Component {
    render() {
        return (
            <div>
                <NavBarMenu />
                <h1>Welcome In Inventory App</h1>
            </div>
        );
    }
}

export default Home;
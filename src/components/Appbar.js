import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react'
class Appbar extends Component {

  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        let {activeItem} = this.state
        return (          
            <Menu pointing secondary>
                <Menu.Item header>Registro Dukan</Menu.Item>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='Recetas' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                <Menu.Item name='Consejos' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                    <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Appbar;
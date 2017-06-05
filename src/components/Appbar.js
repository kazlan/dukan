import React, { Component } from 'react';
import glamorous from 'glamorous'

const GlamAppBar = glamorous.div({
    height: "48px",
    borderBottom: "1px solid gray",
    display: "flex",
    alignItems: "center",
    padding: "0px 8px"
})
const GlamLink = glamorous.a({
    textDecoration: "none",
    margin: "4px 8px",
    ":hover": {
        color: "red"
    }
})
const GlamRightBox = glamorous.div({
    marginLeft: "auto"
})

class Appbar extends Component {

  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        let {activeItem} = this.state
        return (          
            <GlamAppBar>
                <h2>Registro Dukan</h2>
                <GlamLink href="#">Testie</GlamLink>
                <GlamRightBox>
                    <GlamLink href="#">Login</GlamLink>
                </GlamRightBox>
            </GlamAppBar>
        );
    }
}

export default Appbar;
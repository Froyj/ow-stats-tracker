/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Menu, MenuItem } from 'semantic-ui-react';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <Menu>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </Menu>
    );
  }
}
export default Navigation;
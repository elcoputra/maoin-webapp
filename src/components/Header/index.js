import React, { Component } from 'react';
import LogoBrand from './logo';
import { AppBar, Toolbar } from '@material-ui/core';

export default class index extends Component {
  render() {
    return (
      <>
        <AppBar position='static'>
          <Toolbar>
            <LogoBrand />
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';

export default class menuNavigation extends Component {
  render(props) {
    return (
      <>
        <Typography>{this.props.item}</Typography>
      </>
    );
  }
}

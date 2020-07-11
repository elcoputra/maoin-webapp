import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class logo extends Component {
  render(props) {
    const { classes } = this.props;
    return (
      <>
        <Typography className={classes.root}>Ma'Oin</Typography>
      </>
    );
  }
}

const styles = {
  root: {
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    border: 0,
  },
};

export default withStyles(styles)(logo);

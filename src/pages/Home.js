import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '../components/Header';
import HeroHome from '../components/Hero/heroHome';

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <AppBar />
        <HeroHome />
        <div className={classes.contentContainer}>asdw</div>
      </div>
    );
  }
}
const styles = {
  heroHomeContainer: {
    maxWidth: '100%',
    backgroundColor: 'green',
  },
  contentContainer: {
    maxWidth: '100%',
    height: '200vw',
    backgroundColor: 'red',
    marginLeft: '10%',
    marginRight: '10%',
  },
};
export default withStyles(styles)(Home);

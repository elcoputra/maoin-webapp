// Di sini adalah tempat app bar komponent
import React, { Component } from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Menu as MenuIcon } from '@material-ui/icons';

import LogoBrand from './logo';
import MenuNavigation from './menuNavigation';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: 0,
      widthViewPort: 0,
      heightViewPort: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleViewPort);
    this.setState({
      widthViewPort: window.innerWidth,
      heightViewPort: window.innerHeight,
    });
  }
  // Fungsi detetct scroll

  componentWillUnmount() {
    window.onscroll = null;
    window.removeEventListener('resize', this.handleViewPort);
  }

  handleScroll = () => {
    window.onscroll = () => {
      this.setState({
        scrolling: window.pageYOffset,
      });
    };
  };

  handleViewPort = () => {
    this.setState({
      widthViewPort: window.innerWidth,
      heightViewPort: window.innerHeight,
    });
  };

  render() {
    const { rootGrid, gridContainerMenu } = this.gridConf;
    const { classes } = this.props;
    console.log(this.state.widthViewPort);
    return (
      <>
        <AppBar className={this.state.scrolling >= 100 ? classes.appBarScrolling : classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Grid container {...rootGrid}>
              <Grid item>
                <LogoBrand className={classes.test} />
              </Grid>
              <Grid item>
                {this.state.widthViewPort <= 600 ? (
                  <MenuIcon className={classes.iconMenu} />
                ) : (
                  <Grid container {...gridContainerMenu}>
                    <Grid item>
                      <MenuNavigation item='Home' />
                    </Grid>
                    <Grid item>
                      <MenuNavigation item='List Menu' />
                    </Grid>
                    <Grid item>
                      <MenuNavigation item='Promo' />
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </>
    );
  }
  gridConf = {
    rootGrid: {
      direction: 'row',
      justify: 'space-between',
      alignItems: 'center',
    },
    gridContainerMenu: {
      spacing: 3,
      direction: 'row',
      justify: 'space-between',
      alignItems: 'center',
    },
  };
}
const styles = {
  appBar: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  appBarScrolling: {
    justifyContent: 'center',
    backgroundColor: '#b26c2c',
  },
  toolBar: {
    marginLeft: '10%',
    marginRight: '10%',
    paddingLeft: 0,
    paddingRight: 0,
  },
  iconMenu: {
    fontSize: 36,
  },
};

export default withStyles(styles)(index);

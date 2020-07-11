import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '../components/Header';
import HeroHome from '../components/Hero/heroHome';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthViewPort: 0,
      heightViewPort: 0,
    };
  }

  componentDidMount() {
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

  handleViewPort = () => {
    this.setState({
      widthViewPort: window.innerWidth,
      heightViewPort: window.innerHeight,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <HeroHome widthViewPort={this.state.widthViewPort} heightViewPort={this.state.heightViewPort} />
        <div className={this.state.widthViewPort <= 600 ? classes.contentMobileContainer : classes.contentContainer}>asdw</div>
      </div>
    );
  }
}
const styles = {
  heroHomeContainer: {
    maxWidth: '100%',
    backgroundColor: 'green',
  },
  contentMobileContainer: {
    maxWidth: '100%',
    height: '200vw',
    backgroundColor: 'red',
    marginLeft: '5%',
    marginRight: '5%',
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

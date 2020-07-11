import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BackgroundImageHeader from '../../img/hero-image-compressed.jpg';
import { Grid, Typography } from '@material-ui/core';

class heroHome extends Component {
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
    const { rootGridCoulmn, jargonGridRow, infoPesanGridColumn, gojegGrabGridRow, iconContactGrabGridRow } = this.gridConf;
    return (
      <div className={classes.heroHomeContainer}>
        <div className={classes.heroMask}>
          <div className={classes.heroContent}>
            <Grid container {...rootGridCoulmn}>
              <Grid item>
                <Typography className={this.state.widthViewPort <= 600 ? classes.heroTitleMobile : classes.heroTitle}>
                  Ma'Oin
                </Typography>
              </Grid>
              <Grid item>
                <Grid container {...jargonGridRow}>
                  <Grid item>
                    <div className={this.state.widthViewPort <= 600 ? classes.jargonContainerMobile : classes.jargonContainer}>
                      <Typography className={this.state.widthViewPort <= 600 ? classes.jargonTypoMobile : classes.jargonTypo}>
                        Enak
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <div className={this.state.widthViewPort <= 600 ? classes.jargonContainerMobile : classes.jargonContainer}>
                      <Typography className={this.state.widthViewPort <= 600 ? classes.jargonTypoMobile : classes.jargonTypo}>
                        Murah
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <div className={this.state.widthViewPort <= 600 ? classes.jargonContainerMobile : classes.jargonContainer}>
                      <Typography className={this.state.widthViewPort <= 600 ? classes.jargonTypoMobile : classes.jargonTypo}>
                        Bersih
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <div
                  className={this.state.widthViewPort <= 600 ? classes.shortAboutMobileContainer : classes.shortAboutContainer}
                >
                  <Typography className={this.state.widthViewPort <= 600 ? classes.shortAboutMobile : classes.shortAbout}>
                    Ma’Oin adalah rumah makan ayam bakar & goreng, tetapi banyak menu lain yang berhubungan dengan makanan sunda
                    dan kekinian.
                  </Typography>
                </div>
              </Grid>
              <Grid item>
                <Grid container {...infoPesanGridColumn}>
                  <Grid item>Dapat Di Pesan Di:</Grid>
                  <Grid item>
                    <Grid container {...iconContactGrabGridRow}>
                      <Grid item>Alamat</Grid>
                      <Grid item>Nomer Hp</Grid>
                      <Grid item>Instagram</Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container {...gojegGrabGridRow}>
                      <Grid item>Gojek</Grid>
                      <Grid item>Grab</Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.bottomGradient} />
      </div>
    );
  }
  gridConf = {
    rootGridCoulmn: {
      direction: 'column',
      justify: 'center',
      alignItems: 'center',
    },
    infoPesanGridColumn: {
      direction: 'column',
      justify: 'center',
      alignItems: 'center',
    },
    jargonGridRow: {
      spacing: 3,
      direction: 'row',
      justify: 'center',
      alignItems: 'center',
    },
    iconContactGrabGridRow: {
      spacing: 3,
      direction: 'row',
      justify: 'center',
      alignItems: 'center',
    },
    gojegGrabGridRow: {
      spacing: 3,
      direction: 'row',
      justify: 'center',
      alignItems: 'center',
    },
  };
}
const styles = {
  heroHomeContainer: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${BackgroundImageHeader})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroMask: {
    display: 'flex',
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(59, 59, 59, 0.93)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  heroTitle: {
    fontSize: 120,
    fontWeight: 'bold',
  },
  heroTitleMobile: {
    fontSize: 78,
    fontWeight: 'bold',
  },
  shortAboutMobileContainer: { marginTop: 20, marginBottom: 20 },
  shortAboutContainer: { marginTop: 40, marginBottom: 40 },
  shortAboutMobile: {
    fontSize: 18,
    textAlign: 'center',
  },
  shortAbout: {
    fontSize: 24,
    textAlign: 'center',
  },
  jargonContainerMobile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 35,
    backgroundColor: '#b26c2c',
    marginBottom: 5,
    borderRadius: 10,
  },
  jargonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 45,
    backgroundColor: '#b26c2c',
    marginBottom: 5,
    borderRadius: 10,
  },
  jargonTypoMobile: { textAlign: 'center', fontSize: 18 },
  jargonTypo: { textAlign: 'center', fontSize: 24 },
  bottomGradient: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
    height: 200,
    background: 'linear-gradient(0deg, rgba(59,59,59,1) 0%, rgba(59,59,59,0) 100%)' /* FF3.6+ */,
  },
};
export default withStyles(styles)(heroHome);

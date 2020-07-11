import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';

import BackgroundImageHeader from '../../img/hero-image-compressed.jpg';
import Gojek from '../../img/gojek.svg';
import Grab from '../../img/grab.svg';

import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';

class heroHome extends Component {
  render(props) {
    const { classes, widthViewPort, heightViewPort } = this.props;
    const {
      rootGridCoulmn,
      jargonGridRow,
      infoPesanGridColumn,
      gojegGrabGridRow,
      iconContactGrabGridRow,
      iconContact,
    } = this.gridConf;
    console.log('width: ', widthViewPort, 'height: ', heightViewPort);
    return (
      <div className={classes.heroHomeContainer}>
        <div className={classes.heroMask}>
          <div className={classes.heroContent}>
            <Grid container {...rootGridCoulmn}>
              {heightViewPort >= 420 || widthViewPort >= 400 ? (
                <Grid item>
                  <Typography
                    className={widthViewPort <= 600 || heightViewPort <= 600 ? classes.heroTitleMobile : classes.heroTitle}
                  >
                    Ma'Oin
                  </Typography>
                </Grid>
              ) : null}
              <Grid item>
                <Grid container {...jargonGridRow}>
                  <Grid item>
                    <div
                      className={
                        widthViewPort <= 600 || heightViewPort <= 600 ? classes.jargonContainerMobile : classes.jargonContainer
                      }
                    >
                      <Typography
                        className={widthViewPort <= 600 || heightViewPort <= 600 ? classes.jargonTypoMobile : classes.jargonTypo}
                      >
                        Enak
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <div
                      className={
                        widthViewPort <= 600 || heightViewPort <= 600 ? classes.jargonContainerMobile : classes.jargonContainer
                      }
                    >
                      <Typography
                        className={widthViewPort <= 600 || heightViewPort <= 600 ? classes.jargonTypoMobile : classes.jargonTypo}
                      >
                        Murah
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <div
                      className={
                        widthViewPort <= 600 || heightViewPort <= 600 ? classes.jargonContainerMobile : classes.jargonContainer
                      }
                    >
                      <Typography
                        className={widthViewPort <= 600 || heightViewPort <= 600 ? classes.jargonTypoMobile : classes.jargonTypo}
                      >
                        Bersih
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <div
                  className={
                    widthViewPort <= 600 || heightViewPort <= 600
                      ? classes.shortAboutMobileContainer
                      : classes.shortAboutContainer
                  }
                >
                  <Typography
                    className={widthViewPort <= 600 || heightViewPort <= 600 ? classes.shortAboutMobile : classes.shortAbout}
                  >
                    Ma’Oin adalah rumah makan ayam bakar & goreng, tetapi banyak menu lain yang berhubungan dengan makanan sunda
                    dan kekinian.
                  </Typography>
                </div>
              </Grid>
              <Grid item>
                <Grid container {...infoPesanGridColumn}>
                  <Grid item>
                    <div
                      className={
                        widthViewPort <= 600 || heightViewPort <= 600
                          ? classes.titleContactMobileContainer
                          : classes.titleContactContainer
                      }
                    >
                      <Typography
                        className={
                          widthViewPort <= 600 || heightViewPort <= 600
                            ? classes.titleContactMobileTypo
                            : classes.titleContactTypo
                        }
                      >
                        Dapat Di Pesan Di:
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <Grid container {...iconContactGrabGridRow}>
                      <Grid item>
                        <Grid container {...iconContact}>
                          <Grid item className={classes.gridItemIcon}>
                            <PlaceIcon />
                          </Grid>
                          <Grid item>
                            <Typography
                              className={
                                widthViewPort <= 600 || heightViewPort <= 600
                                  ? classes.contactIconTypoMobile
                                  : classes.contactIconTypo
                              }
                            >
                              Jl. Cihampelas No.216
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container {...iconContact}>
                          <Grid item className={classes.gridItemIcon}>
                            <PhoneIcon />
                          </Grid>
                          <Grid item>
                            <Typography
                              className={
                                widthViewPort <= 600 || heightViewPort <= 600
                                  ? classes.contactIconTypoMobile
                                  : classes.contactIconTypo
                              }
                            >
                              082119716257
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container {...iconContact}>
                          <Grid item className={classes.gridItemIcon}>
                            <InstagramIcon />
                          </Grid>
                          <Grid item>
                            <Typography
                              className={
                                widthViewPort <= 600 || heightViewPort <= 600
                                  ? classes.contactIconTypoMobile
                                  : classes.contactIconTypo
                              }
                            >
                              maoin_cihampelas
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container {...gojegGrabGridRow}>
                      <Grid item>
                        <div
                          className={
                            widthViewPort <= 600 || heightViewPort <= 600
                              ? classes.containerMerchantMobile
                              : classes.containerMerchant
                          }
                        >
                          <img
                            className={
                              widthViewPort <= 600 || heightViewPort <= 600 ? classes.imgMerchantMobile : classes.imgMerchant
                            }
                            src={Gojek}
                            alt='Gojek'
                          />
                        </div>
                      </Grid>
                      <Grid item>
                        <div
                          className={
                            widthViewPort <= 600 || heightViewPort <= 600
                              ? classes.containerMerchantMobile
                              : classes.containerMerchant
                          }
                        >
                          <img
                            className={
                              widthViewPort <= 600 || heightViewPort <= 600 ? classes.imgMerchantMobile : classes.imgMerchant
                            }
                            src={Grab}
                            alt='Grab'
                          />
                        </div>
                      </Grid>
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
      spacing: 1,
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
    iconContact: {
      spacing: 1,
      direction: 'row',
      justify: 'flex-start',
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
  titleContactMobileContainer: { marginBottom: 5 },
  titleContactContainer: { marginBottom: 10 },
  titleContactMobileTypo: { fontSize: 18, fontWeight: 'bold' },
  titleContactTypo: { fontSize: 24, fontWeight: 'bold' },
  contactIconTypoMobile: { textAlign: 'center' },
  contactIconTypo: { textAlign: 'center' },
  iconContactContainer: { height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' },
  gridItemIcon: { display: 'flex', justifyContent: 'center' },
  containerMerchantMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    width: 100,
    height: 30,
  },
  containerMerchant: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    width: 180,
    height: 50,
  },
  imgMerchantMobile: { width: '90%', maxHeight: '100%' },
  imgMerchant: { width: '90%', maxHeight: '100%' },
  bottomGradient: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
    height: 50,
    background: 'linear-gradient(0deg, rgba(59,59,59,1) 0%, rgba(59,59,59,0) 100%)' /* FF3.6+ */,
  },
};
export default withStyles(styles)(heroHome);

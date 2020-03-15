import React, { useState, useEffect } from 'react';
import './Header.css'

import styles from './Header.style'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = styles;


function Header() {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className={classes.container} className="header">
      <Grid container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Yellow Blue
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
          </Typography>
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid item >
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
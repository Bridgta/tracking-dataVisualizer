import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'


const Cards = ({confirmed, recovered, deaths, lastUpdate}) => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">Real data</Typography>
                    <Typography color="textSecondary">Real date</Typography>
                    <Typography variant="body2">Number of active cases</Typography>
                </CardContent>
            </Grid>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">Real data</Typography>
                    <Typography color="textSecondary">Real date</Typography>
                    <Typography variant="body2">Number of recovered cases</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">Real data</Typography>
                    <Typography color="textSecondary">Real date</Typography>
                    <Typography variant="body2">Number of deaths</Typography>
                </CardContent>
            </Grid>
            
        </div>
    )
}

export default Cards; 
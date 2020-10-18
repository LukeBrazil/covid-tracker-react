import React from 'react';

// Styles
import styles from './Cards.module.css'
import { Card, CardContent, Typography, Grid, StylesProvider, withStyles } from '@material-ui/core';

const Cards = (props) => {


    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant='h5'>Real Data</Typography>
                        <Typography color='textSecondary'>Real Date</Typography>
                        <Typography variant='body2'>Number of Active Cases of Covid19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
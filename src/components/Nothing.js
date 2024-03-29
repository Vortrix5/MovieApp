import React from 'react'

import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles(theme => ({

    root: {

      padding: theme.spacing(3, 2),

    },

  }));



export default function Nothing() {



    const classes = useStyles();



    return (

        <Paper className={classes.root}>

            <Typography variant="h5" component="h3">

                Not found.

        </Typography>

            <Typography component="p">

                There's no movie with this name.

        </Typography>

        </Paper>

    )

}
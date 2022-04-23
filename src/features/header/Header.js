import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';






export function Header({ selectedLink, themeType }) {

  const useStyles = makeStyles((theme) => ({

    headerWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: theme[themeType].menuBackground,
      
    },

    "@keyframes opacityRise": {
      "0%": {
        marginLeft: '80%',
      },
      "100%": {
        marginLeft: '0%',
      }
    },
  }));

  const classes = useStyles();
  //const allLinks = useSelector((state) => state.counter.value);


  return (
    <div className={classes.headerWrapper}>

    </div>
  );
}

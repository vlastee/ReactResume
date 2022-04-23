import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Switch, FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import {
  setLink,
  setAllLinls,
} from './links/linksSlice';
import photo from './me.jpg';






export function LinksMenu({ selectedLink, setSelectedLink, themeType, setThemeType }) {

  const useStyles = makeStyles((theme) => ({
    photo: {

      borderRadius: '50%',
      height: '150px',
      width: '150px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      paddingRight: '2px',
    },
    photoShadow: {
      marginTop: '1rem',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: theme[themeType].menuBackground + 'b3',
      marginRight: '2px',
      borderRadius: '50%',
      height: '150px',
      width: '150px',
      filter:
        `drop-shadow(
          1px 2px 9px ${theme[themeType].accent}b3
        )
        drop-shadow(
          2px 2px 15px ${theme[themeType].accent}b3
        )
        drop-shadow(
          2px 2px 25px ${theme[themeType].accent}b3
        )`,
      animationDuration: '1000ms',
      animationName: `$boxShadowOnPhoto`,
    },
    photoWraper: {
      paddingBottom: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    linksMenu: {
      width: '200px',
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      // height: '100%',
      backgroundColor: theme[themeType].menuBackground,
      paddingLeft: '5px'
    },
    link: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      backgroundColor: theme[themeType].menuBackground,
      color: theme[themeType].text1Color,
    },
    selectedLink: {
      animationDuration: '300ms',
      animationName: `$opacityRise`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      fontWeight: '700',
      cursor: 'pointer',
      paddingTop: '0.8rem',
      paddingBottom: '0.8rem',
      borderTopLeftRadius: '25px',
      borderBottomLeftRadius: '25px',
      backgroundColor: theme[themeType].menuSelectedColor,
      color: theme[themeType].text2Color,

    },
    linkBeforeSelected: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      paddingTop: '1rem',
      paddingBottom: '0.2rem',
      backgroundColor: theme[themeType].menuBackground,
      color: theme[themeType].text1Color,
    },
    linkAfterSelected: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      paddingTop: '0.2rem',
      paddingBottom: '1rem',
      backgroundColor: theme[themeType].menuBackground,
      color: theme[themeType].text1Color,
    },
    spaceAfterSelected: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      height: '0.8rem',
      borderTopRightRadius: '25px',
      backgroundColor: theme[themeType].menuBackground,
    },
    spaceBeforeSelected: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      height: '0.8rem',
      borderBottomRightRadius: '25px',
      backgroundColor: theme[themeType].menuBackground,
    },
    selectedWrapper: {
      backgroundColor: theme[themeType].menuBackground,
      width: '100%',
      "& :hover": {
        color: '#c7c7c7'
      }
    },
    backgroundForOutercorners: {
      backgroundColor: theme[themeType].menuSelectedColor,
    },
    linkTextAndHover: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      fontWeight: '600',
      "& :hover": {
        fontWeight: '600',
        color: '#000000',
        textShadow: `0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1)`,
      }
    },

    "@keyframes opacityRise": {
      "0%": {
        marginLeft: '80%',
      },
      "100%": {
        marginLeft: '0%',
      }
    },
    "@keyframes boxShadowOnPhoto": {
      "0%": {
        filter:
          `drop-shadow(
          1px 2px 9px ${theme[themeType].accent}b3
        )
        drop-shadow(
          2px 4px 26px ${theme[themeType].accent}b3
        )
        drop-shadow(
          4px 8px 32px ${theme[themeType].accent}b3
        )`,
      },
      "50%": {
        filter:
          `drop-shadow(
          1px 2px 8px  ${theme[themeType].accent}47
        )
        drop-shadow(
          2px 4px 16px ${theme[themeType].accent}47
        )
        drop-shadow(
          4px 8px 32px ${theme[themeType].accent}47
        )`,
      },
      "100%": {
        filter:
          `drop-shadow(
          1px 2px 9px ${theme[themeType].accent}b3
        )
        drop-shadow(
          2px 2px 15px ${theme[themeType].accent}b3
        )
        drop-shadow(
          2px 2px 25px ${theme[themeType].accent}b3
        )`,
      }
    },
    lightSwitch: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      cursor: 'pointer',
      color: theme[themeType].text1Color,
    },
    formControl: {
      margin: '0px!important'
    }
  }));

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {

      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {

        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '&.MuiSwitch-thumb:hover': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            theme[themeType].menuSelectedColor,
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {

          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme[themeType].menuSelectedColor,
      width: 32,
      height: 32,

      '&:before': {
        '&:hover': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            theme[themeType].menuSelectedColor,
          )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          theme[themeType].text1Color,
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },

    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));



  const dispatch = useDispatch();
  const classes = useStyles();
  //const allLinks = useSelector((state) => state.counter.value);
  const links = [
    { describtion: 'ABOUT', text: "in progress..." },
    { describtion: 'EXPERIENCE', text: "in progress..." },
    { describtion: 'EXAMPLES', text: "in progress..." },
    { describtion: 'LINKS', text: "in progress..." },
    { describtion: 'RESUME', text: "in progress..." }
  ];

  const setActiveLink = (index) => {
    setSelectedLink(index);
  }

  const switchLight = () => {
    if (themeType === 'light') {
      setThemeType('dark')
    } else {
      setThemeType('light')
    }

  }

  return (
    <div className={classes.linksMenu}>
      <div className={classes.photoWraper}>
        <div className={classes.photoShadow}>
          <img src={photo} alt="Volodymyr Vlasenko" className={classes.photo} />
        </div>
      </div>
      {links.map((data, index) => {
        if (selectedLink === index) {
          return (
            <div className={classes.selectedWrapper} key={'link_' + index}>
              <div className={classes.backgroundForOutercorners}>
                <div className={classes.spaceBeforeSelected} />
              </div>
              <div className={classes.selectedLink}>
                {data.describtion}
              </div>
              <div className={classes.backgroundForOutercorners}>
                <div className={classes.spaceAfterSelected} />
              </div>
            </div>
          );
        } else if (index === selectedLink - 1) {
          return (
            <div className={classes.linkTextAndHover} key={'link_' + index}>
              <div className={classes.linkBeforeSelected}

                onClick={() => setActiveLink(index)}>

                <div>{data.describtion}</div>
              </div>
            </div>
          );
        } else if (index === selectedLink + 1) {
          return (
            <div className={classes.linkTextAndHover} key={'link_' + index}>
              <div className={classes.linkAfterSelected}

                onClick={() => setActiveLink(index)}>

                <div>{data.describtion}</div>
              </div>
            </div>
          );
        } else {
          return (
            <div className={classes.linkTextAndHover} key={'link_' + index}>
              <div className={classes.link}
                key={'link_' + index}
                onClick={() => setActiveLink(index)}>

                <div>{data.describtion}</div>
              </div>
            </div>
          );
        }
      })}
      <div className={classes.lightSwitch} >
        <FormControlLabel
          className={classes.formControl}
          control={<MaterialUISwitch checked={themeType === 'light' ? false : true} onChange={switchLight} />}
          label=""
        />
      </div>

    </div>
  );
}

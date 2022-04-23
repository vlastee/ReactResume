import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import './App.css';
import { LinksMenu } from './features/LinksMenu';
import { Resume } from './features/Resume/Resume';
import { About } from './features/about/About';
import { Experience } from './features/experience/Experience';
import { Examples } from './features/examples/Examples';
import { Links } from './features/links/Links';

const theme = createTheme({
  light: {
    text1Color: 'rgb(0, 0, 0)',
    text2Color: 'rgb(76, 76, 76)',
    menuBackground: '#cdcdcd',
    secondaryBackground: '#cddeec',
    menuSelectedColor: '#ffffff',
    accent: '#ddd8c4'
  },
  dark: {
    text1Color: 'rgb(225, 225, 225)',
    text2Color: 'rgb(255, 255, 255)',
    menuBackground: '#717393',
    secondaryBackground: '#4b505f',
    menuSelectedColor: '#33394f',
    accent: '#67a0b6'
  }
})
  ;





function App() {

  const [themeType, setThemeType] = useState('light')
  const [selectedLink, setSelectedLink] = useState(0)

  const useStyles = makeStyles(() => ({
    appWrapper: {
      backgroundColor: theme[themeType].menuSelectedColor,
      width: '100vw',
      height: '100vh',
    },
    header: {
      backgroundColor: theme[themeType].menuSelectedColor,
      width: '100%',
      height: '50px'
    },
    body: {
      backgroundColor: theme[themeType].menuSelectedColor,
      display: 'flex',
      flexDirection: 'row',
      height: 'calc(100vh - 50px)',
      zIndex: '10'
    },
    content: {
      backgroundColor: theme[themeType].menuSelectedColor,
      width: 'calc(100% - 205px )',
      paddingLeft: '3rem',
      paddingRight: '3rem',
      overflowX: 'hidden',
      overflowY: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    footer: {
      backgroundColor: '#181818',
      height: '50px'
    }
  }));

  const elements = [
    <About
      themeType={themeType}
    />,
    <Experience
      themeType={themeType}
    />,
    <Examples
      themeType={themeType}
    />,
    <Links
      themeType={themeType}
    />,
    <Resume
      themeType={themeType}
    />,
  ];



  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appWrapper}>
        <div className={classes.body}>
          <LinksMenu
            themeType={themeType}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setThemeType={setThemeType}
          />

          <div className={classes.content}>
            {elements[selectedLink]}
          </div>

        </div>
        <div className={classes.footer}></div>
      </div>
    </ThemeProvider>
  );

}

export default App;

import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { useSpring, animated } from 'react-spring';
import { Grid, Slide, Fade } from '@mui/material';




export function Links({ themeType }) {
    const useStyles = makeStyles((theme) => ({
        allLinkWrapper: {

        },
        linkWrapper: {
            minHeight: '4rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '500',
            textDecorationLine: 'none',

        },
        wrapperForHover: {
            marginBottom: '1rem',
            backgroundColor: theme[themeType].menuBackground,
            borderRadius: '10px',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            '& a:hover': {
                borderRadius: '10px',
                boxShadow: ' rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px'
            }
        },
        icon: {
            maxHeight: '2rem',
            margin: '1rem'
        },
        linkText: {
            textDecorationLine: 'none',
            padding: '1rem'
        },
        titleWrapper: {
            paddingLeft: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: '700',

        },
    }));

    const classes = useStyles();

    const content = [{
        name: 'LinkedIn',
        icon: 'https://static-exp1.licdn.com/sc/h/eahiplrwoq61f4uan012ia17i',
        link: 'https://www.linkedin.com/in/volodymyr-vlasenko-1140b8ab/'
    },
    {
        name: 'GitHub',
        icon: 'https://github.com/fluidicon.png',
        link: 'https://github.com/vlastee'
    },
    {
        name: 'SoundCloud',
        icon: 'https://a-v2.sndcdn.com/assets/images/brand-1b72dd82.svg',
        link: 'https://soundcloud.com/deezave'
    },
    ];

    return (
        <>

            <div className={classes.allLinksWrapper}>
                <div className={classes.titleWrapper}>
                    {'LINKS 🔗'}
                </div >
                {content.map((linkObject) => {
                    return (
                        <Slide direction="left" in={true}
                            key={'wrapper_link_' + linkObject.name}
                            timeout={{ appear: 800, enter: 1000 }} mountOnEnter unmountOnExit>
                            <div className={classes.wrapperForHover}>
                                <a href={linkObject.link} className={classes.linkWrapper}>
                                    <div className={classes.linkText}>{linkObject.name}</div>
                                    <img src={linkObject.icon} alt={linkObject.name} className={classes.icon} />
                                </a>
                            </div>

                        </Slide>
                    )
                })}
            </div>
        </>
    );
}
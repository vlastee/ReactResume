import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { useSpring, animated } from 'react-spring';
import { Grid, Slide, Fade } from '@mui/material';

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 60,
    (x - rect.left - rect.width / 2) / 60,
    1.01
];

const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x / 2}deg) rotateY(${y / 2}deg) scale(${s})`;



export function Examples({ themeType }) {
    const useStyles = makeStyles((theme) => ({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '1rem',
        },
        titleWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: '700',
            color: theme[themeType].text1Color,
        },
        textWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            background: `linear-gradient(${theme[themeType].menuBackground},
                ${theme[themeType].secondaryBackground})`,
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingRight: '1rem',
            paddingLeft: '1rem',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            marginLeft: '0rem',
            marginRight: '0rem',
            maxWidth: '40rem'
        },
        experienceWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            background: `linear-gradient(${theme[themeType].menuBackground},
                ${theme[themeType].secondaryBackground})`,
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingRight: '1rem',
            paddingLeft: '1rem',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            marginLeft: '0rem',
            marginRight: '0rem',
            maxWidth: '40rem',
            color: theme[themeType].text1Color,
        },
        position: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }));
    const classes = useStyles();
    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const config = {
        mass: 1,
        tension: 10,
        friction: 6,
        clamp: false,
        precision: 0.1,
        velocity: 0,
        easing: (t) => t,
    };

    const content1 = [{

        p1: `Work in progress...`,
        p2: `There will be couple components in here...`,

    },
    ];


    const props = useSpring({ xys, config });


    return (

        <animated.div style={props} >
            <Grid container >
                <div className={classes.wrapper}>
                    <div className={classes.titleWrapper}>
                        {'EXAMPLES 🧩'}
                    </div >
                    {
                        content1.map((item, index) => {
                            return (
                                <animated.div
                                    key={'item-' + index}
                                    className="ccard"
                                    style={{ transform: props.xys.to(trans) }}
                                    onMouseLeave={() => set([0, 0, 1])}
                                    onMouseMove={(e) => {
                                        const rect = ref.current.getBoundingClientRect();
                                        set(calc(e.clientX, e.clientY, rect));
                                    }}>
                                    <Slide direction="up" in={true}
                                        key={'skillWrapper_main_' + index}
                                        timeout={{ appear: 800, enter: 1000 }} mountOnEnter unmountOnExit>
                                        <Grid className={classes.experienceWrapper} key={index}>
                                            <div className="ccard-main" ref={ref}>

                                                {Object.keys(item).map((key, i) => {
                                                    if (key === 'p2') {
                                                        return (
                                                            <Fade in={true} appear={true} timeout={4000} unmountOnExit key={key + index}>
                                                                <div className={classes.position}>
                                                                    <b>{item[key]}</b>
                                                                </div >
                                                            </Fade>
                                                        );
                                                    } else if (key === 'p1') {
                                                        return (
                                                            <Fade in={true} appear={true} timeout={3000} unmountOnExit key={key + index}>
                                                                <div className={classes.position}>
                                                                    <b>{item[key]}</b>
                                                                </div >
                                                            </Fade>
                                                        );
                                                    } else if (key === 'p6a' || key === 'p5a' || key === 'p4a') {
                                                        return (
                                                            <Fade in={true} appear={true} timeout={4500} unmountOnExit key={key + index}>
                                                                <div className={classes.position}>
                                                                    <b>{item[key]}</b>
                                                                </div >
                                                            </Fade>
                                                        );
                                                    } else {
                                                        return (
                                                            <Fade in={true} appear={true} timeout={4500} unmountOnExit key={key + index}>
                                                                <div>
                                                                    <p>{item[key]}</p>
                                                                </div >
                                                            </Fade>
                                                        );
                                                    }
                                                })}

                                            </div >
                                        </Grid>
                                    </Slide>
                                </animated.div>
                            )
                        })
                    }
                    {/* {Object.keys(content2).map((key) => {
                        return (

                            <Grid className={classes.experienceWrapper}>
                                <div className="ccard-main" ref={ref}>
                                    <animated.div
                                        className="ccard"
                                        style={{ transform: props.xys.to(trans) }}
                                        onMouseLeave={() => set([0, 0, 1])}
                                        onMouseMove={(e) => {
                                            const rect = ref.current.getBoundingClientRect();
                                            set(calc(e.clientX, e.clientY, rect));
                                        }}>
                                        <div className={classes.textWrapper}>
                                            {content2[key]}
                                        </div >
                                    </animated.div>
                                </div >
                            </Grid>


                        );
                    })} */}


                </div>
            </Grid>
        </animated.div >
    )
}
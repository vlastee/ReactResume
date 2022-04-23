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


export function Experience({ themeType }) {
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
            maxWidth: '40rem',

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

        p1: `DB SCHENKER Dec 2021 - Present`,
        p2: `Network Systems Admin`,
        p3: `● Working with high frequency camera and hardware to create custom scripts
        for capturing multiple types of barcodes on the products in different areas.`,
        p4: `● Maintaining WAPP stack based application with highly customizable
            features, to implement it in the huge variety of stations/areas
             for product tracking and operators performance analysis.
            Working directly with the personal to define the needs per each area.
            `,
        p4a: `Technology used: PHP, JavaScript, TypeScript, PostgreSQL, React.js, Redux, CSS, MaterialUi 4, MUI 5, nodeJS, React
            Virtualized, React DnD, Recharts.`
    },
    {

        p1: `DB SCHENKER Feb 2020 - Dec 2021`,
        p2: `VALUE ENGINEER TEAM LEAD`,
        p3: `● Implementing and maintaining multiple
        integration systems leading to an improvement
        in the time to process inbound production.`,
        p4: `● Implementing and maintaining Power Apps based
            application for automated communication and document tracking
            system leading to an improvement in the time to
            release new process updates by 20%.`,
        p5: `● Implementing and maintaining WAPP stack based
            application for product tracking and operators performance analysis per specific area.
            Working with the personal on different levels for defining and adjusting functionality 
            for specific needs.`,
        p5a: `Technology used: PHP, JavaScript, PostgreSQL, HTML, CSS, BOOTSTRAP, JQUERY.`,

        p6: `● Implementing and maintaining WAPP stack based application with highly customizable
            features, to implement it in the huge variety of stations/areas
             for product tracking and operators performance analysis.
            Working directly with the personal to define for the needs per each area.`,
        p6a: `Technology used: PHP, JavaScript, PostgreSQL, React.js, Redux, CSS, MaterialUi 4, nodeJS, React
        Virtualized, React DnD, Recharts.`,

    }, {

        p1: `DB SCHENKER Sep 2015 - Feb 2020`,
        p2: `Technician / Operator`,
        p3: `Programming as a hobby while working as a technician.`,
        p4a: `Learning Java SE 6 & 7 & 8, Python 2 & 3, JavaScript and general OOP practices.`,
    }
    ];


    const props = useSpring({ xys, config });


    return (

        <animated.div style={props} >
            <Grid container >
                <div className={classes.wrapper}>
                    <div className={classes.titleWrapper}>
                        {'EXPERIENCE 👨‍💻'}
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
                                                            <Fade in={true} appear={true} timeout={3000} unmountOnExit key={key + index} >
                                                                <div className={classes.position}>
                                                                    <b>{item[key]}</b>
                                                                </div >
                                                            </Fade>
                                                        );
                                                    } else if (key === 'p6a' || key === 'p5a' || key === 'p4a') {
                                                        return (
                                                            <Fade in={true} appear={true} timeout={4500} unmountOnExit key={key + index} >
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
                </div>
            </Grid>
        </animated.div >
    )
}
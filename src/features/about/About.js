import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { Slide, List } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import { useSpring, animated } from 'react-spring';
import jsFileBadge from "./JSFileBadge.svg";
import reactBadge from "./ReactBadge.svg";
import cssSVG from "./CSSFileBadge.svg";
import phpSVG from "./PHPFileBadge.svg";
import nodeSVG from "./NodeBadge.svg";
import postgresSVG from "./PostgresBadge.svg";
import { Badge } from './Badge';

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 30,
    (x - rect.left - rect.width / 2) / 30,
    1.01
];

const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x / 2}deg) rotateY(${y / 2}deg) scale(${s})`;

const transSkills = (x, y, s) =>
    `perspective(600px) rotateX(${x / 4}deg) rotateY(${y / 4}deg) scale(${s})`;


export function About({ themeType }) {
    const useStyles = makeStyles((theme) => ({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '1rem',

        },
        titleWrapper: {
            color: theme[themeType].text1Color,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            fontSize: '1.5rem',
            fontWeight: '700',
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
            marginLeft: '0.25rem',
            marginRight: '0.25rem',
            maxWidth: '600px',
            color: theme[themeType].text1Color,

        },
        allSkillsWrapper: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            maxWidth: '40rem'
        },
        skillWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1rem',
            minWidth: '10rem'
        }

    }));

    const classes = useStyles();
    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const config = {
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0,
        easing: (t) => t,
    };


    const content = [{
        title: 'LITTLE BIT ABOUT ME 👨',
        p1: `A Full Stack Developer is someone who works with the 
        Black magic — or server side — of the application as well as the Front End, or shiny side. 
        Full Stack Developers have to have some skills in a wide variety of coding niches, from 
        databases to graphic design and UI/UX management in order to do the valuable job.`,
        p2: `Passions: 🎶 music, 🧠 autodidacticism, 🖥️ coding, 📡 technology, 🧫 science.`,
    }, {
        title: 'SKILLS:',
        p: [<img src={jsFileBadge} alt="JavaScript" />,
        <img src={reactBadge} alt="React" />,
        <img src={cssSVG} alt="CSS" />,
        <img src={phpSVG} alt="PHP" />,
        <img src={nodeSVG} alt="PHP" />,
        <img src={postgresSVG} alt="PostgreSQL" />],
    }];



    const props = useSpring({ xys, config });

    return (
        <animated.div style={props} >
            <div className={classes.wrapper} >
                <Slide direction="right" in={true} timeout={{ appear: 100, enter: 500 }}>
                    <div className={classes.titleWrapper}>
                        {content[0].title}
                    </div >
                </Slide>

                <div ref={ref}>
                    <animated.div
                        style={{ transform: props.xys.to(trans) }}
                        onMouseLeave={() => set([0, 0, 1])}
                        onMouseMove={(e) => {
                            const rect = ref.current.getBoundingClientRect();
                            set(calc(e.clientX, e.clientY, rect));
                        }}>
                        <Slide direction="left" in={true} timeout={{ appear: 500, enter: 1000 }} >
                            <div className={classes.textWrapper}>
                                {content[0].p1}
                            </div >
                        </Slide>
                        <Slide direction="left" in={true} timeout={{ appear: 800, enter: 2000 }}>
                            <div className={classes.textWrapper}>
                                {content[0].p2}
                            </div >
                        </Slide>
                    </animated.div>
                </div >

                <div className={classes.titleWrapper}>
                    {content[1].title}
                </div >

                <div ref={ref}>
                    <animated.div
                        style={{ transform: props.xys.to(transSkills) }}
                        onMouseLeave={() => set([0, 0, 1])}
                        onMouseMove={(e) => {
                            const rect = ref.current.getBoundingClientRect();
                            set(calc(e.clientX, e.clientY, rect));
                        }}

                    >
                        <TransitionGroup className={classes.allSkillsWrapper}>
                            {content[1].p.map((item, i) => {
                                return (
                                    <Slide direction="up" in={true} key={'skillWrapper_' + i} timeout={{ appear: 1000, enter: 2000 }} mountOnEnter unmountOnExit>
                                        <Badge
                                            themeType={themeType}
                                            imgComponent={item}
                                            xys={props.xys}
                                        />
                                    </Slide>
                                );
                            })}
                        </TransitionGroup>


                    </animated.div>
                </div >

            </div>
        </animated.div >
    )
}
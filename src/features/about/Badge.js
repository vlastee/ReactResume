import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { useSpring, animated } from 'react-spring';
import reactSvg from "./EmptyBadge.svg";
import { color } from '@mui/system';




const trans = (x, y, s) =>
    `perspective(500px) rotateX(${x * 2.5}deg) rotateY(${y * 2.5}deg) scale(${s})`;


const config = {
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    easing: (t) => t,
};

const lightEffect = makeStyles(() => ({
    lightEffect: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1rem',
        minWidth: '10rem',
        borderRadius: '50%',
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        minHeight: '10rem',
        color: '#ffe066',
        fontSize: '1rem'
    }
}));

export const Badge = React.forwardRef(({ themeType, imgComponent, xys }, ref) => {
    const useStyles = makeStyles((theme) => ({
        badgeWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1rem',
            minWidth: '10rem'
        },
        itemWrapper: {
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
            maxWidth: '600px'
        }
    }));
    const classes = useStyles();


    const props = useSpring({ xys, config });


    const light = lightEffect();

    return (
        <div className={classes.itemWrapper} ref={ref}>
            <animated.div
                className={light.lightEffect}
                style={{ transform: props.xys.to(trans) }}
            >

                {imgComponent}
            </animated.div>
        </div>
    )

})
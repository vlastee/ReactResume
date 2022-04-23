import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios'
import resume from './resume.png';



export function Resume({ themeType }) {
    const useStyles = makeStyles((theme) => ({
        downloadButtonWrapper: {
            marginTop: '1rem', marginBottom: '1rem',
            backgroundColor: theme[themeType].accent,
            borderRadius: '10px',
            padding: '1rem',
            fontWeight: '500',
            fontSize: '1.2rem',
            cursor: 'pointer',
            color: theme[themeType].text2Color + '!important',

            boxShadow: `${theme[themeType].text2Color} 0px 4px 6px -1px, ${theme[themeType].text2Color} 0px 2px 4px -1px`,
            transitionDuration: '500ms',
            transitionProperty: 'color, background-color, box-shadow,padding,margin-top, margin-bottom',
            '&:hover': {
                color: theme[themeType].text1Color,
                backgroundColor: theme[themeType].secondaryBackground,
                boxShadow: theme[themeType].secondaryBackground + ' 0px 20px 30px -10px',
                padding: '1.5rem',
                marginTop: '0.5rem',
                marginBottom: '0.5rem'
            },
            '& a': {
                color: theme[themeType].text2Color + '!important',
                textDecoration: 'none',
                '&:hover': {
                    color: theme[themeType].text1Color,
                }
            }

        },
        downloadButton: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

        },
        imageWrapper: {
            maxHeight: '35rem',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
            maxWidth: 'calc(100vw - 205px)'
        },
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        imgDivWrapper: {
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme[themeType].text1Color,
        }
    }));
    const classes = useStyles();

    const handleClick = () => {
        axios({
            method: "get",
            url: process.env.PUBLIC_URL + 'Volodymyr.V.Resume.2022.docx',
            responseType: "arraybuffer"
        })
            .then((response) => {
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(
                    new Blob([response.data], { type: "application/octet-stream" })
                );
                link.download = "name_of_file_with_extension";

                document.body.appendChild(link);

                link.click();
                setTimeout(function () {
                    window.URL.revokeObjectURL(link);
                }, 200);
            })
            .catch((error) => { });
    }

    return (
        <div className={classes.root}>
            <div className={classes.downloadButtonWrapper}>
                <a href={process.env.PUBLIC_URL + 'Volodymyr.V.Resume.2022.docx'} download="Volodymyr.V.Resume.2022.docx">
                    <div className={classes.downloadButton} >
                        {'Download Resume .docx'} <DownloadIcon />
                    </div>
                </a>
            </div>
            <div className={classes.imgDivWrapper}>
                {'Preview'}
                <img src={resume} alt="Resume Preview" className={classes.imageWrapper} />
            </div>
        </div>
    );
};
import React, { useMemo, useState } from 'react';
import './TimeLine.css';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
    text: {
        'font-size': '.7rem',
    }
}));

const TimeLine = ({ indications, bounds }) => {

    const classes = useStyles();
    console.log('timeline rerender')
    
    const timeLineEntries = useMemo(() => {
        if (indications && bounds) {
            console.log('timeline MEMO rerender')
            return indications.filter(indication => bounds.contains(indication.position)).sort((a, b) => new Date(b.prop.fromTime) - new Date(a.prop.fromTime)).map((timeLineEntry, index) => <TimelineItem key={index}>
                <TimelineOppositeContent>
                    <Typography  >{timeLineEntry.prop.Place}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography className={classes.text}>{new Date(timeLineEntry.prop.fromTime).toLocaleString('he-IL')}</Typography>
                </TimelineContent>
            </TimelineItem>)
        }

    }
        , [bounds,indications]);


    return (<div className="time-line-container">

        <React.Fragment>
            <Timeline >
                {timeLineEntries}
            </Timeline>
        </React.Fragment>
    </div>

    )
}
export default TimeLine;
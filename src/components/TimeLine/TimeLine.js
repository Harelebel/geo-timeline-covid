import React from 'react';
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


const useStyles = makeStyles((theme) => ({
    text: {
        'font-size': '.7rem',
    }
}));

const TimeLine = (props) => {


    let { markers } = props;

    const classes = useStyles();

    const timeLineEntries = markers ?
        markers.sort((a,b)=>new Date(b.prop.fromTime)- new Date(a.prop.fromTime)).map(timeLineEntry => <TimelineItem>
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

        : null

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
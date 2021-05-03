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


    const { daysRange, setDaysRange } = props;

    const classes = useStyles();

    return (<div>
        <input type="range" min="1" max="14" value={daysRange} onChange={event => setDaysRange(Number(event.target.value))} />
        <div>Current data is for {daysRange} days ago </div>
        <React.Fragment>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.text}>מיון מחלקה פנימית ג' איכילוב</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>09:30 am</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.text}>10:00 am</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>Code</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.text}>12:00 am</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className={classes.text}>Sleep</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.text}>9:00 am</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className={classes.text}>Repeat</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </React.Fragment>
    </div>

    )
}
export default TimeLine;
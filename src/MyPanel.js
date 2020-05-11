import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const messages = {
  profileTitle : 'プロフィール',
  title1 : '名前：藤島裕貴',
  pad1 :'1990年7月16日生',

  career : '経歴',
  title2 : '北海道出身の高卒',
  pad2 : '某エネルギー会社\n某コールセンター\n某IT会社\n現在に至る',
  
  appeal : '自己PR',
  title3 : '現在できること、学んでいること',
  pad3 : 'Javascript',
 
  contact : 'リンク先',
  title4 : '連絡はこちらへ',
  pad4 : '○○@gmail.com',
  
};

export default function MyPanel() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

    
  };

  
  return (
    
    
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{messages.profileTitle}</Typography>
          <Typography className={classes.secondaryHeading}> {messages.title1}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {messages.pad1}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>{messages.career}</Typography>
          <Typography className={classes.secondaryHeading}>
            {messages.title2}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {messages.pad2}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>{messages.appeal}</Typography>
          <Typography className={classes.secondaryHeading}>
            {messages.title3}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
           {messages.pad3}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>{messages.contact}</Typography>
          <Typography className={classes.secondaryHeading}>
          {messages.title4}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {messages.pad4}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

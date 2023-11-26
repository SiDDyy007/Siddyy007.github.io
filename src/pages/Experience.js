import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2016 - 2018'
          iconStyle={{background : "#3e497a" , color:"#fff"}}
          icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>SHM College of Engineering</h3>
            <p>High School </p>
            <p> </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2018 - 2022'
          iconStyle={{background : "#3e497a" , color:"#fff"}}
          icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>University of Mumbai</h3>
            <p>Bachelors in Computer Engineering </p>
            <p> </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Jun 2021 - Aug 2021'
          iconStyle={{background : "#3e497a" , color:"#fff"}}
          icon={<WorkIcon />}>
            <h3 className='vertical-timeline-element-title'>Internship Studio</h3>
            <p>Artificial Intelligence Intern </p>
            <p> </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2022 - Present'
          iconStyle={{background : "#3e497a" , color:"#fff"}}
          icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>University of California, Riverside</h3>
            <p>Masters in Computer Engineering </p>
            <p> </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Jun 2023 - Sept 2023'
          iconStyle={{background : "#3e497a" , color:"#fff"}}
          icon={<WorkIcon />}>
            <h3 className='vertical-timeline-element-title'>Helix Genomics</h3>
            <p>Software Engineer Intern </p>
            <p> </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience
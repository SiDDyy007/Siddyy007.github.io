import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub'
import projectDisplay from '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="Zing Bing" />
        <p>
            <b>Skills</b> : {project.skill}
        </p>
        <GitHubIcon />
    </div>
  )
}

export default ProjectDisplay
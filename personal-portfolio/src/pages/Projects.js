import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { projectList } from '../helpers/ProjectList';
import '../styles/Projects.css';
import '../styles/ProjectDisplay.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'></div>
      {projectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image={project.image} />
      })}
    </div>
  )
}

export default Projects
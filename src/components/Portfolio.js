import React from 'react';
import Projects from './pages/Projects';

//Insert projects here 
const projects = []


function Portfolio() {
    return (
      <div>
        <h1 className='projectHeader'>Blake's Portfolio</h1>
  
        <Projects projects={projects} />
      </div>
    );
  }
  
  export default Portfolio;
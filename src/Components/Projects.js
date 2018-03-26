import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import ProjectItem from './ProjectItem';

class Projects extends Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {

    let projectItems;
    if(this.props.projects) {
        projectItems = this.props.projects.map(project => {
            // console.log(project);
            return (
                <ProjectItem 
                onDelete={this.deleteProject.bind(this)} 
                key={project.title}
                project={project} />
            );
        });
    }
      
    return (
      <div className="Projects">
       {projectItems}
      </div>
    );
  }
}

// PropTypes protect our interfaces from breaking down due to incorrect usage. If a component doesn't validate the props being passed to it, we run the risk of accidentally passing in the wrong type of data causing glitches in our interface for users

Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}


export default Projects;

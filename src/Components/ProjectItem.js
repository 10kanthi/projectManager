import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

  deleteProject(id) {
    // console.log("test");
    this.props.onDelete();
  }

  render() {
      // console.log(this.props);
      
    return (
      <li className="Project">
       <strong>{this.props.project.title} :</strong> { this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)} > x </a>
      </li>
    );
  }
}

// PropTypes protect our interfaces from breaking down due to incorrect usage. If a component doesn't validate the props being passed to it, we run the risk of accidentally passing in the wrong type of data causing glitches in our interface for users

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}


export default ProjectItem;

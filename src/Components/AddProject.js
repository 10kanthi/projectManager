import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {

 constructor () {
     super();
     this.state = {
         newProject:{}
     }
 }

 static defaultProps = {
     categories: ['Web Design', 'Web Development', 'Mobile Development']
 }

 handleSubmit(e) {
     if(this.refs.title.value === ''){
         alert('Title is required');
     } else {
         this.setState({newProject:{
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value

         }}, function () {
             this.props.addProject(this.state.newProject);
         });
     }
     e.preventDefault();
 }



 //////////////////////////////////////////////////////////
  render() {
    let categoryOptions = this.props.categories.map( category => {
        return <option key={category} value={category}> {category}</option>
    });

    return (
      <div>
          <h3>Add project</h3>  
          <form onSubmit={this.handleSubmit.bind(this)} >
              <div>
                  <label>Title</label> <br />
                  <input type="text" ref="title"/>
              </div>
                <br/>
               <div>
                  <h3><label> Choose Category to add new project:</label></h3> 
                  <select ref="category" className="btn btn-light">
                    {categoryOptions}
                  </select>
              </div>
              <br/>
              <input  type="submit" value="Submit" className="btn btn-info" />
          </form>
          <br/>
      </div>
    );
  }
}

AddProject.propTypes = {
    addproject: PropTypes.func,
    category: PropTypes.array
  }
  
  

export default AddProject;

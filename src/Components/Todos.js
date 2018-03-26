import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import TodoItem from './TodoItem';
import '../App.css';

class Todos extends Component {

//   deleteProject(id) {
//     this.props.onDelete(id);
//   }

  render() {

    let todoItems;
    if(this.props.todos) {
        todoItems = this.props.todos.map(todo => {
            // console.log(project);
            return (
                <TodoItem 
                // onDelete={this.deleteProject.bind(this)} 
                key={todo.title}
                todo={todo} />
            );
        });
    }
      
    return (
      <div className="Todos">
       {todoItems}
      </div>
    );
  }
}

// PropTypes protect our interfaces from breaking down due to incorrect usage. If a component doesn't validate the props being passed to it, we run the risk of accidentally passing in the wrong type of data causing glitches in our interface for users

Todos.propTypes = {
  todos: PropTypes.array,
  
}


export default Todos;

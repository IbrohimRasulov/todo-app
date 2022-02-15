import React from 'react';
import Header from './Header';
import TodosList from "./TodosList";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      }
    ]
   };

   handleChange = (id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        }),
      }
    });
  };

  delTodo = (id) => {
    console.log("deleted", id);
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo} />
      </div>
    );
  }
}
export default TodoContainer;

import React from 'react';
import List from './components/List';
import ToDoForm from './components/ToDoForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      loading: false
    }
    this.addToDo = this.addToDo.bind(this);
  }

  componentDidMount() {
    // data fetching that happened
    Promise.resolve('todouno')
    .then(data => {
      this.setState({
        todos: [...this.state.todos, data],
      })
    })
  }

  addToDo(e, newToDo) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
  }

  render() {
    return (
      <div>
        <ToDoForm addToDo={this.addToDo}/>
        {
          this.state.loading  ? <div>loading...</div> : <List todos={this.state.todos}/>
        }
        <button onClick={() => this.setState({ loading: !this.state.loading})}>load</button>
      </div>
    )
  }
}

export default App;

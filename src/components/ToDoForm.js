import React from 'react';

export default function ToDoForm({ addToDo }) {
  const inputText = React.createRef();
  return (
    <form>
      <label htmlFor="todo">Add ToDo</label>
      <input id="todo" type="text" ref={inputText}></input>
      <button onClick={(e) => addToDo(e, inputText.current.value)}>Submit</button>
    </form>
  )
}

// export default class ToDoForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       text: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       text: e.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addToDo('test')
//   }

//   render() {
//     return (
//     <form>
//       <label htmlFor="todo">Add ToDo</label>
//       <input id="todo" type="text" onChange={this.handleChange}></input>
//       <button onClick={this.handleSubmit}>Submit</button>
//     </form>
//     )
//   }
// }

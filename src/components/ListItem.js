import React from 'react';

export default function ListItem({ todo }) {
  return (
    <li>{todo}</li>
  )
}

// export default class ListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       crossed: false
//     }
//   }

//   handleClick = () => {
//     this.setState({
//       crossed: !this.state.crossed
//     });
//   }

//   render() {
//     return (
//       <li
//         style={ {textDecoration: `${this.state.crossed ? 'line-through' : 'none'}` }}
//         onClick={this.handleClick}>{this.props.todo}
//       </li>
//     )
//   }
// }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { prototype } from 'events';

class TodoItems extends Component {
  // use a function to add style
  getStyle = () =>{
    return {
      padding : '10px',
      borderBottom: '1px #ccc dotted',
      display : 'block'
    }
  }

  // markComplete = (e) =>{
  //   console.log(this.props)
  // }
  render() {
    // destructuring of props
    const {id,title, completed} = this.props.todo;
    
    // console.log(this.props.todos);
    return (
        <div className='container'>

          <p style = { this.getStyle() }>
            <span style = { itemStyle}>{ id }</span>{ ' ' }
            <input type = 'checkbox' onChange = { this.props.markComplete.bind(this,id) }/>{ ' ' }
             <strong style={{ textDecoration : completed ?
                'line-through': 'none'}}>
                { title }
              </strong>
              {/* delete todo list-item */}
              <button onClick = { this.props.delTodo.bind(this,id) } style = {btnStyle} className = 'btn btn-danger'>&times;</button>
          </p>
        </div>
    );
  }
}
// prototypes
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired
}

// using a variable to apply a style
const itemStyle = {
  color: 'brown'
}
const btnStyle = {
  // backgroundColor : 'red',
  color :'#fff',
  border : 'none',
  borderRadius : '5px',
  float : 'right',
  padding : '3px 10px',
  fontWeight : 'bolder',
  fontSize: '1.2em',
  cursor : 'pointer',
}
export default TodoItems;

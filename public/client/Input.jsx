import React from 'react';
import axios from 'axios';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
 
  addToList (input, bool) {
    this.props.addToList('/db', input, bool);
    $('input').val('');
  }

  render () {
    return (
      <div>
        <input></input>
        <div onClick={ () => (this.addToList($('input').val().split(':'), true)) }>Own it</div>
        <div onClick={ () => (this.addToList($('input').val().split(':'), false)) }>Want it</div>
      </div>
    )
  }
} 


module.exports = Input;
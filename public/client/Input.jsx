import React from 'react';
import axios from 'axios';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
 
  addToList (input, bool) {
    var inputObj = {
      artist: input[0],
      title: input[1],
      have: bool
    }
    this.props.addToList('/db', inputObj, bool);
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
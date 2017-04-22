import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  addToOwned () {
    console.log($('input').val());
    $('input').val('');
  }

  render () {
    return (
      <div>
        <input></input>
        <div onClick={ () => (this.addToOwned()) }>Own it</div>
        <div>Want it</div>
      </div>
    )
  }
} 


module.exports = Input;
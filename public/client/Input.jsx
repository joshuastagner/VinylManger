import React from 'react';
import axios from 'axios';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  addToOwned () {
    var input = $('input').val().split(':');
    $('input').val('');

    var sendObj = {
      artist: input[0],
      title: input[1]
    }

    console.log('send obj', sendObj);

    axios.post('/db', sendObj).then(function(response){
      console.log('response in input.jsx', response);
    }).catch(function(err) { console.log(err) });
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
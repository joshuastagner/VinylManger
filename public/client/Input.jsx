import React from 'react';
import axios from 'axios';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  // addToOwned (input, bool) {

  //   var sendObj = {
  //     artist: input[0],
  //     title: input[1],
  //     have: bool
  //   }

  //   axios.post('/db', sendObj).then(function(response){
  //     console.log('response in input.jsx', response);
  //   }).catch(function(err) { console.log(err) });
  // }



  render () {
    return (
      <div>
        <input></input>
        <div onClick={ () => (this.props.addToList($('input').val().split(':'), true)) }>Own it</div>
        <div onClick={ () => (this.props.addToList($('input').val().split(':'), false)) }>Want it</div>
      </div>
    )
  }
} 


module.exports = Input;
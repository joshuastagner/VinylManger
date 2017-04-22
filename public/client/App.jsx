import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }
  }

componentDidMount() {
  console.log('this from componentDidMount', this)
  axios.get('/testDataBase').then(function(response) {
    console.log('this form inside .then', this);
      this.setState({albums: response.data});
  }.bind(this)); 
}

  render () {
    return (
      <div>
        <h1>{this.state.albums.artist}</h1>
      </div>
    )
  }
} 

render(<App />, document.getElementById('app'));
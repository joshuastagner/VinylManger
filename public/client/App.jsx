import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import WantedList from './WantedList.jsx';
import OwnedList from './OwnedList.jsx';
import Album from './Album.jsx';
import AddToCollection from './AddToCollection.jsx';

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
        <h1>vinylTunes</h1>
        <div>
          <AddToCollection />
        </div>
        <div>
          <WantedList albums={'wanted records'} />
        </div>
        <div>
          <OwnedList albums={'owned records'} />
        </div>
        <div>
          <Album album={'Displayed Album'} />
        </div>
      </div>
    )
  }
} 

render(<App />, document.getElementById('app'));
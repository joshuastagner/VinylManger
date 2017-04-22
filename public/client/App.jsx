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
      albums: [],
      album: 'Nothing to Display At the Moment'
    }
  }

componentDidMount() {
  axios.get('/testDataBase').then(function(response) {
      this.setState({album: response.data.title});
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
          <Album album={this.state.album} />
        </div>
      </div>
    )
  }
} 

render(<App />, document.getElementById('app'));
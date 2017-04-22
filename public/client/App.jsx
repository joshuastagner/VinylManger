import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import AlbumList from './WantedList.jsx';
import OwnedList from './OwnedList.jsx';
import Album from './Album.jsx';
import AddToCollection from './AddToCollection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      OwnedAlbums: [],
      WantedAlbums: [],
      // album: ''
    }
  }

componentDidMount() {
  this.fetchListData(); 
}

addToList (input, bool) {
    var sendObj = {
      artist: input[0],
      title: input[1],
      have: bool
    }

    // console.log(sendObj);

    axios.post('/db', sendObj)
         .then((response) => { this.fetchListData() })
         .catch(function(err) { console.log(err) });

}

fetchListData () {
  axios.get('/lists').then(function(response) {

    var albums = response.data;
    var OwnedAlbums = [];
    var WantedAlbums = [];

    albums.forEach(function(album) {
      console.log(album);
      if (album.have) {
        OwnedAlbums.push(album);
      } else {
        WantedAlbums.push(album);
      }
    });

    this.setState({OwnedAlbums: OwnedAlbums});
    this.setState({WantedAlbums: WantedAlbums});

  }.bind(this));
}



render () {
  return (
      <div>
        <h1>Vinyl Manager</h1>
        <div>
          <AddToCollection addToList={this.addToList.bind(this)}/>
        </div>
        <div>
          <AlbumList list={'Wanted'} albums={this.state.WantedAlbums} />
        </div>
        <div>
          <AlbumList list={'Owned'} albums={this.state.OwnedAlbums} />
        </div>
        {/*<div>
          <Album album={this.state.album} />
        </div>*/}
      </div>
    )
  }
} 

render(<App />, document.getElementById('app'));
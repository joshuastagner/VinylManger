import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import AlbumList from './AlbumList.jsx';
import Album from './Album.jsx';
import AddToCollection from './AddToCollection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      OwnedAlbums: [],
      WantedAlbums: []
    }
  }

componentDidMount() {
  this.fetchListData(); 
}

addToList (action, input, bool) {
    axios.post(action, input)
         .then((response) => { this.fetchListData() })
         .catch(function(err) { console.log(err) });

}

fetchListData () {
  axios.get('/lists').then(function(response) {

    var albums = response.data;
    var OwnedAlbums = [];
    var WantedAlbums = [];

    albums.forEach(function(album) {
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
          <AlbumList list={'Wanted'} albums={this.state.WantedAlbums} remove={this.addToList.bind(this)} />
        </div>
        <div>
          <AlbumList list={'Owned'} albums={this.state.OwnedAlbums} remove={this.addToList.bind(this)} />
        </div>
        {/*<div>
          <Album album={this.state.album} />
        </div>*/}
      </div>
    )
  }
} 

render(<App />, document.getElementById('app'));
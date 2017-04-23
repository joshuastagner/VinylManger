import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import AlbumList from './AlbumList.jsx';
import AlbumSearchList from './AlbumList.jsx';
import Album from './Album.jsx';
import AddToCollection from './AddToCollection.jsx';
import ENV from '../../ENV/config.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      OwnedAlbums: [],
      WantedAlbums: [],
      SearchAlbums: []
    }
  }

componentDidMount() {
  this.fetchListData(); 
}

addToList (action, input, bool) {
    console.log(input);
    axios.post(action, input)
         .then((response) => { this.fetchListData() })
         .catch(function(err) { console.log(err) });

}

searchDiscogs (query) {
  var discogs = 'https://api.discogs.com/database/search?q=';
  axios.get(discogs + query + ENV.key + ENV.secret)
       .then( (response) => {
         
         var resultAlbums = [];

         response.data.results.slice(0, 25).forEach(function(album) {
           var info = album.title.split(' - ');
           var albumObj = {
             artist: info[0],
             title: info[1],
             have: false
           }

           resultAlbums.push(albumObj);
         });


         this.setState({SearchAlbums: resultAlbums})
       } );
}

addToDataBase (album, bool) {
  album[have] = bool;
  addToList('/db', album);
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
          <AddToCollection 
            addToList={this.addToList.bind(this)} 
            search={this.searchDiscogs.bind(this)}
          />
        </div>
        <div>
          <AlbumList list={'Results'} albums={this.state.SearchAlbums} search={this.searchDiscogs.bind(this)}/>
        </div>
        <div>
          <AlbumList list={'Wanted'} albums={this.state.WantedAlbums} remove={this.addToList.bind(this)} />
        </div>
        <div>
          <AlbumSearchList list={'Owned'} albums={this.state.OwnedAlbums} add={this.addToDataBase.bind(this)} />
        </div>
        {/*<div>
          <Album album={this.state.album} />
        </div>*/}
      </div>
    )
  }
} 

render(<App />, document.getElementById('app'));
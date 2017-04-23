import React from 'react';
import AlbumView from './AlbumView.jsx'

var AlbumList = (props) => (
  <div>
    <div>
      <h3>{props.list}</h3>
    </div>
    <div>
        {props.albums.map( album => <AlbumView album={album} remove={props.remove} search={props.search}/>)}
    </div>
  </div>
);

module.exports = AlbumList;
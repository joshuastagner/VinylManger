import React from 'react';
import AlbumSearchView from './AlbumView.jsx'

var AlbumSearchList = (props) => (
  <div>
    <div>
      <h3>{props.list}</h3>
    </div>
    <div>
        {props.albums.map( album => <AlbumSearchView album={album} add={props.remove} search={props.search}/>)}
    </div>
  </div>
);

module.exports = AlbumList;
import React from 'react';
import AlbumSearchView from './AlbumSearchView.jsx'

var AlbumSearchList = (props) => (
  <div>
    <div>
      <h3>{props.list}</h3>
    </div>
    <div>
      <div onClick={() => (props.clearSearch() ) }>CLEAR</div>
      {props.albums.map( album => 
        <AlbumSearchView 
          album={album} 
          add={props.add} 
          search={props.search}
        />)}
    </div>
  </div>
);

module.exports = AlbumSearchList;
import React from 'react';

class AlbumView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>{this.props.album.title}</div>
    )
  }
}

module.exports = AlbumView;

// {this.props.album.title}
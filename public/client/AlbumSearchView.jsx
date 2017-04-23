import React from 'react';

class AlbumSearchView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }



  render () {
    return (
      <div>
        { !this.state.clicked ? 
        
          <div onClick={ () => ( this.setState({clicked: !this.state.clicked}) )}>
            {this.props.album.title}
          </div> 
        
        :

          <div>
            <div onClick={ () => ( this.setState({clicked: !this.state.clicked}) )}>
              { this.props.album.title }         
            </div>
            <ul>
              <div>Artist: {this.props.album.artist}</div>
              <div onClick={() => (this.props.add(this.props.album, false) )}>want it</div>
              <div onClick={() => (this.props.add(this.props.album, true) )}>have it</div>
            </ul>
          </div>
        }
      </div>
    )
  }
}

module.exports = AlbumSearchView;

import React from 'react';

class AlbumView extends React.Component {
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
              <div onClick={() => (this.props.remove('/remove' ,this.props.album) )}>remove</div>
            </ul>
          </div>
        }
      </div>
    )
  }
}

module.exports = AlbumView;


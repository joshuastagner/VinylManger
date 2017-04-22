import React from 'react';
import Input from './Input.jsx';

class AddToCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  render () {
    return (
      <div>
        <div onClick={ () => { this.setState({clicked: !this.state.clicked}) } }>Add To Collection</div>
        {this.state.clicked ? <Input addToList={this.props.addToList} /> : null}
      </div>
    );
  }
}; 


module.exports = AddToCollection;
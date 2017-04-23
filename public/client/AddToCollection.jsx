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
        <div className="addTo" onClick={ () => { this.setState({clicked: !this.state.clicked}) } }>Add To Collection</div>
        {this.state.clicked ? <Input addToList={this.props.addToList} search={this.props.search}/> : null}
      </div>
    );
  }
}; 


module.exports = AddToCollection;


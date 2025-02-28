import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ""
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value 
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.text}/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

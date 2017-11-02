import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cards';

import CardList from '../CardList';

class App extends Component{
  constructor(){
    super();
    this.state = {
      cards: [] // initial state
    }
  }

  componentDidMount(){
    this.props.getCards()
  }


  render() {
    console.log(this.props, "RENDER PROPS");
    return (
      <div className="App">
      Welcome 2 hell!
      <CardList cards={this.props.cards}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, "STATE");
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => {
      console.log("DISPATCH ACTION");
      dispatch(getCards());
    }
  }
}


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default ConnectedApp;
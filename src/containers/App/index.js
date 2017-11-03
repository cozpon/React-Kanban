import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cards';
import { getPriorities } from '../../actions/priorities';

import NewCardForm from '../NewCardForm';
import CardList from '../CardList';
import PriorityList from '../PriorityList';

class App extends Component{
  constructor(){
    super();
  }


  componentDidMount(){
    this.props.getCards()
    this.props.getPriorities()
  }

  render() {
    return (
      <div className="App">
        <NewCardForm/>
        <h1>Welcome 2 hell!</h1><br/><br/>
        <PriorityList priorities={this.props.priorities}/>
        <CardList cards={this.props.cards}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
      console.log(state, 'STATE');
  return {
    cards: state.cardsList.cards,
    priorities: state.prioritiesList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => {
      dispatch(getCards());
    },
    getPriorities: () => {
      dispatch(getPriorities());
    }
  }
}


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default ConnectedApp;
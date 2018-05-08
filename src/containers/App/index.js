import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cards';
import { getPriorities } from '../../actions/priorities';
import { getUsers } from '../../actions/users';

import NewCardForm from '../NewCardForm';
import CardList from '../CardList';

class App extends Component{
  constructor(){
    super();
  }


  componentDidMount(){
    this.props.getCards() // mounting the props from the actions
    this.props.getPriorities()
    this.props.getUsers()
  }

  // A container does data fetching and then renders its corresponding sub-component.

  render() {
    return (
      <div className="App">
        <NewCardForm/>
        <h1>Welcome 2 hell!</h1><br/><br/>
        <CardList cards={this.props.cards} columnStatus='Queue'/>
        <CardList cards={this.props.cards} columnStatus='Progress'/>
        <CardList cards={this.props.cards} columnStatus='Done'/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardsList.cards, // mapping to the props from my "Object.assign" state
    priorities: state.prioritiesList, // this is the style for the [...action] return from REDUCERS
    users: state.usersList  // I used both styles to illustrate how each work. [...] is shorthand ES6
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => {
      dispatch(getCards()); // DISPATCH is a middleware
    },
    getPriorities: () => {
      dispatch(getPriorities());  // requires you to export it as well
    },
    getUsers: () => {
      dispatch(getUsers());
    }
  }
}


const ConnectedApp = connect( // you have to export both StateToProps and DipatchToProps
  mapStateToProps,            // doing it this way allows you to do both cleanly.
  mapDispatchToProps
)(App)
export default ConnectedApp;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cards';
import { getPriorities } from '../../actions/priorities';
import { getUsers } from '../../actions/users';

import NewCardForm from '../NewCardForm';
import CardList from '../CardList';
import PriorityList from '../PriorityList';
import UserList from '../UserList';

class App extends Component{
  constructor(){
    super();
  }


  componentDidMount(){
    this.props.getCards()
    this.props.getPriorities()
    this.props.getUsers()
  }

  render() {
    return (
      <div className="App">
        <NewCardForm/>
        <h1>Welcome 2 hell!</h1><br/><br/>

        <CardList cards={this.props.cards}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardsList.cards,
    priorities: state.prioritiesList,
    users: state.usersList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => {
      dispatch(getCards());
    },
    getPriorities: () => {
      dispatch(getPriorities());
    },
    getUsers: () => {
      dispatch(getUsers());
    }
  }
}


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default ConnectedApp;
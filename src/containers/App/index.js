import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cards';
import NewCardForm from '../NewCardForm';
import CardList from '../CardList';

class App extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.getCards()
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
    cards: state.cardsList.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => {
      dispatch(getCards());
    }
  }
}


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default ConnectedApp;
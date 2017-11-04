import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cards';
import { getPriorities } from '../../actions/priorities';
import { getUsers } from '../../actions/users';

import PriorityList from '../PriorityList';
import UserList from '../UserList';
import CreatorList from '../CreatorList';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      created_by: '',
      priorityId: '',
      statusId: 1,
      assigned_to: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handlePriorityInput = this.handlePriorityInput.bind(this);
    this.handleCreatorInput = this.handleCreatorInput.bind(this);
  }

  handleSubmit(evt){
    console.log(evt, 'handleSubmit');
    evt.preventDefault();

    let newCard = {
      title: this.state.title,
      created_by: this.state.created_by || 1,
      priorityId: this.state.priorityId || 1,
      statusId: this.state.statusId,
      assigned_to: this.state.assigned_to || 1
    }
     console.log(newCard, "New Card")

    this.props.addCard(newCard);

    this.setState({
      title: '',
      created_by: '',
      priorityId: '',
      statusId: 1,
      assigned_to: ''
    })
  }

  handleTitleInput(evt) {
    this.setState({
      title: (evt.target.value)
    });
  }

  handleCreatorInput(evt) {
    this.setState({
      created_by: parseInt(evt.target.value)
    })
  }

  handlePriorityInput(evt) {
    this.setState({
      priorityId: parseInt(evt.target.value)
    });
  }

handleUserInput(evt) {
    this.setState({
      assigned_to: parseInt(evt.target.value)
    })
  }

  render() {
    return (
      <div className="new-card-form">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} type="text" placeholder="card title" onChange={this.handleTitleInput}/>
          <br/>
          Created By: <UserList users={this.props.users} onUserChange={this.handleUserInput}/>
          <br/>
          Priority Level:
          <PriorityList priorities={this.props.priorities} onPriorityChange={this.handlePriorityInput}/>
          <br/>
          Assigned To:
          <CreatorList users={this.props.users} onCreatorChange={this.handleCreatorInput}/>

          <input type="submit" value="submit card"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    priorities: state.prioritiesList,
    users: state.usersList,
    cards: state.cardsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    },
    getPriorities: (priorities) => {
      dispatch(getPriorities(priorities));
    },
    getUsers: (users) => {
      dispatch(getUsers(users));
    }
  }
}

const ConnectedNewCardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm)

export default ConnectedNewCardForm;


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cards';
import { getPriorities } from '../../actions/priorities';
import { getUsers } from '../../actions/users';

import Select from '../../components/Select';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      created_by: '',
      priorityId: '',
      statusId: 1,
      assigned_to: ''
    };

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
      title: this.state.title,  // when the client inserts/changes the title, it sets the state here
      created_by: this.state.created_by || 1, // Sets an "or" case for if client doesn't change dropdown options
      priorityId: this.state.priorityId || 1, // it will default to the defaulted drop-down option
      statusId: this.state.statusId,
      assigned_to: this.state.assigned_to || 1
    }
     console.log(newCard, "New Card")

    this.props.addCard(newCard);

    this.setState({
      title: '',  // this will pass up to the newCard that will be submitted on the button press of "submit"
      created_by: '', // it will be an integer which, through association on our DB, will return us a Username
      priorityId: '',
      statusId: 1,
      assigned_to: ''
    })
  }

  handleTitleInput(evt) {
    this.setState({             // setting the state of the title to be the value input from below
      title: (evt.target.value)
    });
  }

  handleCreatorInput(evt) {
    this.setState({     // where the Created_By value is set to the State
      created_by: parseInt(evt.target.value)  // parsed from a string into an integer which JSON wants
    });
  }

  handlePriorityInput(evt) {
    this.setState({
      priorityId: parseInt(evt.target.value)
    });
  }

handleUserInput(evt) {
    this.setState({
      assigned_to: parseInt(evt.target.value)
    });
  }

  render() {
    return (
      <div className="new-card-form">
        <form onSubmit={this.handleSubmit}>
          <Select
          list={this.props.users}     // here is the DUMMY COMPONENT in use
          label="Task Master: "
          type="username"
          handler={this.handleCreatorInput.bind(this)}/>

          <Select
          list={this.props.priorities}
          label="Priority Level:  "
          type="kind"
          handler={this.handlePriorityInput.bind(this)}/>

          <Select
          list={this.props.users}
          label="Assigned To: "
          type="username"
          handler={this.handleUserInput.bind(this)}/>

          <div className="input-form">
            <input value={this.state.title} type="text" placeholder="card title" onChange={this.handleTitleInput}/>
          </div>
          <input type="submit" value="submit card"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    priorities: state.prioritiesList,     // setting state
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


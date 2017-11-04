import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cards';
import { getPriorities } from '../../actions/priorities';
import { getUsers } from '../../actions/users';

import PriorityList from '../PriorityList';
import UserList from '../UserList';

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      createdByInput: '',
      priorityIdInput: '',
      statusIdInput: '',
      userIdInput: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();

    let newCard = {
      titleInput: this.state.titleInput,
      createdByInput: this.state.createdByInput || 1,
      priorityIdInput: this.state.priorityIdInput || 3,
      statusIdInput: this.state.statusIdInput || 2,
      userIdInput: this.state.userIdInput || 1
    }
     console.log(newCard, "New Card")

    this.props.addCard(newCard);

    this.setState({
      titleInput: '',
      createdByInput: '',
      priorityIdInput: '',
      statusIdInput: '',
      userIdInput: ''
    })
  }

  handleUserInput(evt) {
    this.setState({
      userIdInput: evt.target.value
    })
  }

  handleTitleInput(evt) {
    this.setState({
      titleInput: evt.target.value
    });
  }

  handlePriorityInput(evt) {
    this.setState({
      priorityIdInput: evt.target.value
    });
  }

  componentDidMount(){
   this.props.getPriorities(),
   this.props.getUsers()
  }
  // XHR request to get priorities table
  // iterates over table data to make option variables

  render() {
    return (
      <div className="new-card-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleTitleInput.bind(this)}/>

          <select name="assignedTo">
            <option value={this.state.userIdInput} onChange={this.handleSubmit.bind(this)}>blah</option>
          </select>

          <UserList users={this.props.users} onChange={this.handleUserInput.bind(this)}/>

          <PriorityList priorities={this.props.priorities}/>

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
/*
render(){

   return (
      <div className='NewCardForm'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='New Task' value={this.state.titleInput} onChange={this.handleChange.bind(this)}/>
          <select name="assignedTo">
            <option value={this.props.username} onChange={this.handleChange.bind(this)}>bug</option>
          </select>

           <PrioritiesList priorities={this.props.priorities}/>

         <select>
            <option value="1">Queue</option>
          </select>
          <select name="createdBy">
            <option value="1">Virgi</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }

*/



const mapStateToProps = (state) => {
  return {
    priorities: state.prioritiesList,
    users: state.usersList
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


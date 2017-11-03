import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cards';

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
  }

  handleSubmit(evt){
    evt.preventDefault();

    let newCard = {
      titleInput: this.state.titleInput,
      createdByInput: this.state.createdByInput,
      priorityIdInput: this.state.priorityIdInput,
      statusIdInput: this.state.statusIdInput,
      userIdInput: this.state.userIdInput
    }
     console.log(newCard)

    this.props.addCard(newCard);


    this.setState({
      titleInput: '',
      createdByInput: '',
      priorityIdInput: '',
      statusIdInput: '',
      userIdInput: ''
    })
  }

  handleTitleInput(evt) {
    this.setState({
      titleInput: evt.target.value
    });
  }

  handlePriorityInput(evt) {
     console.log(evt);
    this.setState({
      priorityIdInput: evt.target.value
    });
  }

  componentDidMount(){
   this.props.getPriorities
  }
  // XHR request to get priorities table
  // iterates over table data to make option variables

  render() {
    return (
      <div className="new-card-form">
        <div className="newCardHeader">
        <h2> New Card Form </h2>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <input value={this.state.titleInput} type="text" placeholder="title" onChange={this.handleTitleInput.bind(this)}/>

          <input type="submit" value="Submit Priority">

          </input>

        </form>
         <br/>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {

  return {
    addCard: (card) => {
      dispatch(addCard(card))
    }
  }
}


const ConnectedNewCardForm = connect(
  null,
  mapDispatchToProps
)(NewCardForm)

export default ConnectedNewCardForm;


            // <option value={this.state.priorityInput} onChange={this.handlePriorityInput.bind(this)}>Low</option>
            // <option value={this.state.priorityInput} onChange={this.handlePriorityInput.bind(this)}>Medium</option>
            // <option value={this.state.priorityInput} onChange={this.handlePriorityInput.bind(this)}>High</option>




   // <select name="priority" onChange={this.handleChangeAssigned.bind(this)}>

 //     this.props.priorities.map((priority) => {
 //       return {
 //         <option value={priority.id}> {priority.name} </option>

 //   });
 // }
 // </select>
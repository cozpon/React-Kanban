import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { loadBooks } from '../../actions/books'


class App extends Component {
  constructor(){
    super();
    this.state = {
      something: [] // intitial state
    }
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}


// const mapStateToProps = (state) => { // returns an object onto this.props
//   return {
//     //books: state.bookList // makes it this.props.bookies
//   }
// }


// const mapDispatchToProps = (dispatch) => {
//     return {
//       // loadBooks: (books) => {
//       //   console.log("Dispatching the action");
//       //   dispatch(loadBooks(books))
//       }
//     }
// }


const ConnectedApp = connect(
  // mapStateToProps,
  // mapDispatchToProps
)(App)

export default ConnectedApp;

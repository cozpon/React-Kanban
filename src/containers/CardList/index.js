import React, { Component } from 'react';
import CardItem from '../../components/CardItem';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cards';

class CardList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        status: '' // allowing for filtering later
      };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

 handleStatusChange(evt) {
    this.setState({
      status: 'Progress'
    });
  }

  render() {
    return (
      <div className="card-list">
        <form onSubmit={this.handleStatusChange}>
        { this.props.cards.filter(card => {
          return card.Status.type === this.props.columnStatus })
// I was thinking card.Status should equal columnStatus assigned in the App index.js RENDER()
          .map((card) => {
            return (  // mapping over it returns as many Cards as there are in the props.
              <CardItem
                title={card.title}
                creator={card.Creator.username}
                assigneduser={card.Dev.username}
                priority={card.Priority.kind}
                status={card.Status.type}
                key={card.id} />
            );
          })
        }
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cards: state.cardsList.cards // putting cards onto the Prop component
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => {
      dispatch(getCards()) // using Dispatch to get cards into Props.
    }
  }
}


const ConnectCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)


export default ConnectCardList;


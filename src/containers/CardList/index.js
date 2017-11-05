
import React, { Component } from 'react';
import CardItem from '../../components/CardItem';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cards';

class CardList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        filterInput: ''
      }
  }

  render() {
    return (
      <div className="card-list">
        {
          this.props.cards.filter(card => {
            console.log(card);
            return card.Status.type === this.props.columnStatus
          })
          .map((card) => {
            return (
              <CardItem
                title={card.title}
                creator={card.Creator.username}
                assigneduser={card.Dev.username}
                priority={card.Priority.kind}
                status={card.Status.type}
                key={card.id}/>
            );
          })
        }
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
      dispatch(getCards())
    }
  }
}


const ConnectCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)


export default ConnectCardList;













// // making a dummy component (functional component)
// import React from 'react';
// import CardItem from'../../components/CardItem';

// const CardList = ({cards}) => {
//   return (
//     <div className="card-list"> {
//       cards.map((card) => {
//       console.log(card, "CARD LIST");  //renders X amount of books
//         return (
//           <CardItem
//             title={card.title}
//             creator={card.Creator.username}
//             assigneduser={card.Dev.username}
//             priority={card.Priority.kind}
//             status={card.Status.type}
//             key={card.id}/>
//         );
//       })
//     }
//     </div>
//   );
// }


// export default CardList;
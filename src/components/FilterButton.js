
const FilterButton = ({
  filter,
  children
}) => {
  return (
      onClick = {event => {
        event.preventDefault();
        store.dispatch({
          type: 'SET_CARD_STATUS',
          filter
        });
      }}
    >
      {children}
    </a>

    )
}
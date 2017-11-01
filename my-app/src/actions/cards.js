export const CREATE_CARD = 'CREATE_CARD';







export const createCard = (card) => {
  return {
    type: CREATE_CARD,
    title: card
    priority:
    status:
    created_by:
    assigned_to_field:
  }
}

// actions should not be importing anything, they should be exporting
// other people/components are going to be importing these actions
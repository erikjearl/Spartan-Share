const notes =  (notes = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      case 'CREATE':
        return [...notes, action.payload];
      default:
        return notes;
    }
};

export default notes;
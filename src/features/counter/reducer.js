const INCREMENT = "COUTER.INCREMENT";
const DECREMENT = "COUTER.DECREMENT";

const initialState = {
  couter: 0,
};

const CouterReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case INCREMENT:
      return newState;
    case DECREMENT:
      return newState;
    default:
      return state;
  }
};

export default CouterReducer;

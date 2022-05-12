const INCREMENT = "COUTER.INCREMENT";
const DECREMENT = "COUTER.DECREMENT";

const initialState = {
  count: 0,
};

const CouterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(state.co);
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default CouterReducer;

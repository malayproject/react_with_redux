import { AMOUNT_ACTION_TYPES, POINTS_ACTION_TYPES } from "./actions";

const initialAmountState = { amount: 100 };
const initialPointsState = { points: 0 };

export const amountReducer = (state = initialAmountState, action) => {
  switch (action.type) {
    case AMOUNT_ACTION_TYPES.INCREMENT:
      return { ...state, amount: state.amount + 1 };
    case AMOUNT_ACTION_TYPES.DECREMENT: {
      if (state.amount > 0) return { ...state, amount: state.amount - 1 };
      return state;
    }
    case AMOUNT_ACTION_TYPES.INCREMENT_BY_VALUE:
      return { ...state, amount: state.amount + action.payload };
    case AMOUNT_ACTION_TYPES.DECREMENT_BY_VALUE: {
      if (state.amount >= action.payload)
        return { ...state, amount: state.amount - action.payload };
      return state;
    }
    default:
      return state;
  }
};

export const pointsReducer = (state = initialPointsState, action) => {
  switch (action.type) {
    case POINTS_ACTION_TYPES.INCREMENT:
      return { ...state, points: state.points + 1 };
    case POINTS_ACTION_TYPES.DECREMENT: {
      if (state.points > 0) return { ...state, points: state.points - 1 };
      return state;
    }
    case POINTS_ACTION_TYPES.INCREMENT_BY_VALUE:
      return { ...state, points: state.points + action.payload };
    case POINTS_ACTION_TYPES.DECREMENT_BY_VALUE: {
      if (state.points >= action.payload)
        return { ...state, points: state.points - action.payload };
      return state;
    }
    default:
      return state;
  }
};

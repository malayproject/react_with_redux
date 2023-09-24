import { produce } from "immer";
import { AMOUNT_ACTION_TYPES, POINTS_ACTION_TYPES } from "./actions";

const initialAmountState = { amount: 0 };
const initialPointsState = { points: 0 };

export const amountReducer = (state = initialAmountState, action) => {
  switch (action.type) {
    case AMOUNT_ACTION_TYPES.INIT_PENDING:
      return produce(state, (draft) => {
        draft.pending = true;
      });
    case AMOUNT_ACTION_TYPES.INIT_FULFILLED:
      return produce(state, (draft) => {
        console.log("init amount", action.payload);
        draft.amount = action.payload;
        draft.pending = false;
      });
    case AMOUNT_ACTION_TYPES.INIT_PENDING:
      return produce(state, (draft) => {
        draft.pending = false;
        draft.error = action.error;
      });
    case AMOUNT_ACTION_TYPES.INCREMENT:
      return produce(state, (draft) => {
        ++draft.amount;
      });
    case AMOUNT_ACTION_TYPES.DECREMENT: {
      if (state.amount > 0)
        return produce(state, (draft) => {
          --draft.amount;
        });
      return state;
    }
    case AMOUNT_ACTION_TYPES.INCREMENT_BY_VALUE:
      return produce(state, (draft) => {
        draft.amount = draft.amount + action.payload;
      });
    case AMOUNT_ACTION_TYPES.DECREMENT_BY_VALUE: {
      if (state.amount >= action.payload)
        return produce(state, (draft) => {
          draft.amount = draft.amount - action.payload;
        });
      return state;
    }
    default:
      return state;
  }
};

export const pointsReducer = (state = initialPointsState, action) => {
  switch (action.type) {
    case POINTS_ACTION_TYPES.INIT_PENDING:
      return produce(state, (draft) => {
        draft.pending = true;
      });
    case POINTS_ACTION_TYPES.INIT_FULFILLED:
      return produce(state, (draft) => {
        draft.points = action.payload;
        draft.pending = false;
      });
    case POINTS_ACTION_TYPES.INIT_PENDING:
      return produce(state, (draft) => {
        draft.pending = false;
        draft.error = action.error;
      });
    case POINTS_ACTION_TYPES.INCREMENT:
      return produce(state, (draft) => {
        ++draft.points;
      });
    case POINTS_ACTION_TYPES.DECREMENT: {
      if (state.points > 0)
        return produce(state, (draft) => {
          --draft.points;
        });
      return state;
    }
    case POINTS_ACTION_TYPES.INCREMENT_BY_VALUE:
      return produce(state, (draft) => {
        draft.points = draft.points + action.payload;
      });
    case POINTS_ACTION_TYPES.DECREMENT_BY_VALUE: {
      if (state.points >= action.payload)
        return produce(state, (draft) => {
          draft.points = draft.points - action.payload;
        });
      return state;
    }
    default:
      return state;
  }
};

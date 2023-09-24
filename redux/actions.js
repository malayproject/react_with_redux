import axios from "axios";

export const AMOUNT_ACTION_TYPES = {
  INIT_PENDING: "AMOUNT/INIT_PENDING",
  INIT_FULFILLED: "AMOUNT/INIT_FULFILLED",
  INIT_REJECTED: "AMOUNT/INIT_REJECTED",
  INCREMENT: "AMOUNT/INCREMENT",
  DECREMENT: "AMOUNT/DECREMENT",
  INCREMENT_BY_VALUE: "AMOUNT/INCREMENT_BY_VALUE",
  DECREMENT_BY_VALUE: "AMOUNT/DECREMENT_BY_VALUE",
};
export const POINTS_ACTION_TYPES = {
  INIT_PENDING: "POINTS/INIT_PENDING",
  INIT_FULFILLED: "POINTS/INIT_FULFILLED",
  INIT_REJECTED: "POINTS/INIT_REJECTED",
  INCREMENT: "POINTS/INCREMENT",
  DECREMENT: "POINTS/DECREMENT",
  INCREMENT_BY_VALUE: "POINTS/INCREMENT_BY_VALUE",
  DECREMENT_BY_VALUE: "POINTS/DECREMENT_BY_VALUE",
};

export const initAmountValue = (id) => {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: AMOUNT_ACTION_TYPES.INIT_PENDING });
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch({
        type: AMOUNT_ACTION_TYPES.INIT_FULFILLED,
        payload: data.amount,
      });
    } catch (error) {
      dispatch({
        type: AMOUNT_ACTION_TYPES.INIT_REJECTED,
        error: error.message,
      });
    }
  };
};

export const incrementAmountValue = () => {
  return { type: AMOUNT_ACTION_TYPES.INCREMENT };
};

export const decrementAmountValue = () => {
  return { type: AMOUNT_ACTION_TYPES.DECREMENT };
};

export const incrementAmountByValue = (paramValue) => {
  return { type: AMOUNT_ACTION_TYPES.INCREMENT_BY_VALUE, payload: paramValue };
};

export const decrementAmountByValue = (paramValue) => {
  return { type: AMOUNT_ACTION_TYPES.DECREMENT_BY_VALUE, payload: paramValue };
};

export const initPointsValue = (id) => {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: POINTS_ACTION_TYPES.INIT_PENDING });
      const { data } = await axios.get(`http://localhost:3000/bonuses/${id}`);
      console.log(data);
      dispatch({
        type: POINTS_ACTION_TYPES.INIT_FULFILLED,
        payload: data.points,
      });
    } catch (error) {
      dispatch({
        type: POINTS_ACTION_TYPES.INIT_REJECTED,
        error: error.message,
      });
    }
  };
};

export const incrementPointsValue = () => {
  return { type: POINTS_ACTION_TYPES.INCREMENT };
};

export const decrementPointsValue = () => {
  return { type: POINTS_ACTION_TYPES.DECREMENT };
};

export const incrementPointsByValue = (paramValue) => {
  return { type: POINTS_ACTION_TYPES.INCREMENT_BY_VALUE, payload: paramValue };
};

export const decrementPointsByValue = (paramValue) => {
  return { type: POINTS_ACTION_TYPES.DECREMENT_BY_VALUE, payload: paramValue };
};

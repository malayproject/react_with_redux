export const AMOUNT_ACTION_TYPES = {
  INCREMENT: "AMOUNT/INCREMENT",
  DECREMENT: "AMOUNT/DECREMENT",
  INCREMENT_BY_VALUE: "AMOUNT/INCREMENT_BY_VALUE",
  DECREMENT_BY_VALUE: "AMOUNT/DECREMENT_BY_VALUE",
};
export const POINTS_ACTION_TYPES = {
  INCREMENT: "POINTS/INCREMENT",
  DECREMENT: "POINTS/DECREMENT",
  INCREMENT_BY_VALUE: "POINTS/INCREMENT_BY_VALUE",
  DECREMENT_BY_VALUE: "POINTS/DECREMENT_BY_VALUE",
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

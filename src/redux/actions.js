import {
  ACTION_SET_NAME,
  ACTION_ADD_CAT,
  ACTION_SET_ACTIVITY,
} from "./actionTypes";

export const setName = (name) => {
  return {
    type: ACTION_SET_NAME,
    payload: {
      name,
    },
  };
};

export const setActivity = ({ id, activity }) => ({
  type: ACTION_SET_ACTIVITY,
  payload: {
    id,
    activity,
  },
});


export const addCat = ({ name, activity }) => ({
  type: ACTION_ADD_CAT,
  payload: {
    name,
    activity,
  },
});

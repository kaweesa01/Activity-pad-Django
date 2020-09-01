import {
  GET_ACTIVITIES,
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  UPDATE_ACTIVITY,
} from "../actions/types";

const initialState = {
  activities: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== action.payload
        ),
      };
    case UPDATE_ACTIVITY:
      return {
        ...state,
        activities: [
          ...state.activities.filter(
            (activity) => activity.id !== action.payload.id
          ),
          action.payload,
        ],
      };
    default:
      return state;
  }
}

import axios from "axios";
import {
  GET_ACTIVITIES,
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  UPDATE_ACTIVITY,
} from "./types";

export const getActivities = () => (dispatch) => {
  axios
    .get("/api/activities/")
    .then((res) => {
      dispatch({
        type: GET_ACTIVITIES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response));
};

export const addActivity = (activity) => (dispatch) => {
  axios
    .post("/api/activities/", activity)
    .then((res) => {
      dispatch({
        type: ADD_ACTIVITY,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response));
};

export const deleteActivity = (id) => (dispatch) => {
  axios
    .delete(`/api/activities/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_ACTIVITY,
        payload: id,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const updateActivity = (id, activity, complete) => (dispatch) => {
  axios
    .put(`/api/activities/${id}/`, {
      activity: activity,
      complete: complete == false ? true : false,
    })
    .then((res) => {
      dispatch({
        type: UPDATE_ACTIVITY,
        payload: res.data,
      });
    });
};

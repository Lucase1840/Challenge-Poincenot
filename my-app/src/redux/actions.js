import axios from "axios";
export const CREATE_USER = "GET_PRODUCTS";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const FILTER_TODOS = "FILTER_TODOS";
export const RESET_TODOS = "RESET_TODOS";

const URL = "https://api-3sxs63jhua-uc.a.run.app/v1"

export function createUser() {
  return function () {
    return axios(`${URL}/userId`)
      .then(resp => window.localStorage.setItem('userId', resp.data))
      .catch(error => console.log(error.message))
  }
};

export function getToDos(userId) {
  return function (dispatch) {
    return axios(`${URL}/todo/${userId}`)
      .then(resp =>
        dispatch({ type: GET_TODOS, payload: resp.data }))
      .catch(error => console.log(error.message))
  }
};

export function addToDo(newItem, userId) {
  return function (dispatch) {
    const data = {
      title: newItem,
      message: ''
    }
    return axios.post(`${URL}/todo/${userId}`, data)
      .then(resp => {
        let newToDo = {
          completed: resp.data.completed,
          message: resp.data.message,
          title: resp.data.title,
          id: resp.data.todoId,
        }
        dispatch({ type: ADD_TODO, payload: newToDo })
      })
      .catch(error => console.log(error.message))
  }
};

export function deleteToDo(id, userId) {
  return function (dispatch) {
    return axios.delete(`${URL}/todo/${userId}`, { data: { todoId: id } })
      .then(() =>
        dispatch({ type: DELETE_TODO, payload: id }))
      .catch(error => console.log(error.message))
  }
};

export function changeStatus(id, currentStatus, userId) {
  return function (dispatch) {
    const data = {
      completed: currentStatus ? false : true,
      todoId: id
    }
    return axios.put(`${URL}/todo/${userId}`, data)
      .then(resp => {
        dispatch({ type: CHANGE_STATUS, payload: id })
      })
      .catch(error => console.log(error.message))
  }
};

export function filterToDoList(filterOption, userId) {
  return function (dispatch) {
    return axios(`${URL}/todo/${userId}/${filterOption}`)
      .then(resp => {
        dispatch({ type: FILTER_TODOS, payload: resp.data })
      })
      .catch(error => console.log(error.message))
  }
};

export function resetToDos(userId) {
  return function (dispatch) {
    return axios.delete(`${URL}/todo/${userId}/reset`)
      .then(resp => {
        dispatch({ type: RESET_TODOS })
      })
      .catch(error => console.log(error.message))
  }
};

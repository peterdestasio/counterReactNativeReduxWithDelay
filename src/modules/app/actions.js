//@flow

import { INCREMENT, DECREMENT, ADD_NEW_COUNTER } from './constants'

export type Action = {
    type: string,
    payload?: {
        id: number
    }
}

export type ActionAsync = (dispatch: Function, getState: Function) => void

//action that tell the reducer which counter with specified id needs to be incremented
export const increment = (id: number): Action => {
    return {
        type: INCREMENT,
        payload: {
            id
        }
    }
}

export const decrement = (id: number): Action => {
    return {
        type: DECREMENT,
        payload: {
            id
        }
    }
}

export const newCounter = (): Action => {
    return {
        type: ADD_NEW_COUNTER
    }
}

export const incrementWithDelay = (id: number): ActionAsync => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT,
        payload: {
          id
        }
      })
    }, 1000)
  }
}
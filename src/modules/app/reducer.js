// @flow

import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ADD_NEW_COUNTER } from './constants'

type CounterState = {
    idGen: number,
    counters: Object
}

const initialState: CounterState = {
    idGen: 0,
    counters: {}
}


export default handleActions(
    {
        [ADD_NEW_COUNTER]: (state: CounterState, action) => {
            const { idGen } = state
            const newId = idGen + 1


            //generate a new id for the counter and assign value 0 to that id
            return {
                idGen: newId,
                counters: {
                    ...state.counters,
                    [newId]: 0
                }
            }
        },
        [INCREMENT]: (state: CounterState, action) => {
            const { payload: { id } } = action

            return {
                ...state,
                counters: {
                    ...state.counters,
                    [id]: state.counters[id] + 1
                }
            }
        },
        [DECREMENT]: (state: CounterState, action) => {
            const { payload: { id } } = action
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [id]: state.counters[id] - 1
                }
            }
        }
    },
    initialState
)

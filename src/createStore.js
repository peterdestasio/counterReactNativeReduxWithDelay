// @flow

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { app } from './modules'

const middleware = applyMiddleware(thunk)

export default (data: Object = {} ) => {
    const rootReducer = combineReducers({
        //every module reducer should be defined here
        [app.NAME]: app.reducer
    })

    return createStore(rootReducer, data, middleware)
}
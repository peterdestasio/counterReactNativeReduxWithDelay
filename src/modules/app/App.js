import React, { PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Counters, Counter } from './../../components'
import * as actions from './actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const renderCounters = (counters, decrement, increment, incrementWithDelay) => {
  return Object.keys(counters).map(id => {
    const value = counters[id]
    return (
      <Counter
        key={id}
        decrementFn={() => decrement(id)}
        incrementFn={() => increment(id)}
        incrementWithDelayFn={() => incrementWithDelay(id)}>
        {value}
      </Counter>
    )
  })
}

const App = props => {
  const { addNewCounter, counters, decrement, increment, incrementWithDelay } = props

  return (
    <View style={styles.container}>
      <Counters addFn={addNewCounter}>
        {renderCounters(counters, decrement, increment, incrementWithDelay)}
      </Counters>
    </View>
  )
}

App.displayName = 'App'
/*
App.propTypes = {
  addNewCounter: PropTypes.func.isRequired,
  counters: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementWithDelay: PropTypes.func.isRequired
}
*/


export default connect(
  state => ({
    counters: state.app.counters
  }),
  dispatch => ({
    addNewCounter: () => dispatch(actions.newCounter()),
    increment: id => dispatch(actions.increment(id)),
    decrement: id => dispatch(actions.decrement(id)),
    incrementWithDelay: id => dispatch(actions.incrementWithDelay(id))
  })
)(App)
import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
  type: 'INCREMENT',
  incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count: count
})

const resetCount = () => ({
  type: 'RESET'
})

// Reducers 
// 1. Reducers are pure functions (ie. the output is only determined by the input / we dont want to change
//    variables or rely on values from variables outside of the reducer scope). We just want to use the input
//    of the state and the action to return the new state value.
// 2. Never change state or action. We don't want to directly change these or re-assign them values. Instead
//    we just read off of state and action, returning an object that represents the new state


const countReducer = (state={ count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy 
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(decrementCount())

store.dispatch(setCount({ count: 100 }))


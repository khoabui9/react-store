import { combineReducers } from 'redux'
import Cart from './cart.reducers'
import Products from './products.reducers'

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  Products,
  Cart
})

export default rootReducer
import { combineReducers } from 'redux'
import Cart from './cart.reducers'
import Products from './products.reducers'
import Menu from './menu.reducers'

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  Products,
  Cart,
  Menu
})

export default rootReducer
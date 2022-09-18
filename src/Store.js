import {applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {createStore} from 'redux'
import { BuyerReducer } from './reducers/BuyerReducer'
import { ProductReducer } from './reducers/ProductReducer'
import { BidReducer } from './reducers/OrderReducer'


const reducer = combineReducers({
   user : BuyerReducer,
   product : ProductReducer,
   bid : BidReducer
})

const initialState = {}



const middleware = [thunk]

const store = createStore(reducer, initialState , composeWithDevTools(applyMiddleware(...middleware)))


export default store
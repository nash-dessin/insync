import React, { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext()

const initialState = {
  user: null,
  cart: [],
  filters: { query: '' },
}

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload }
    case 'logout':
      return { ...state, user: null }
    case 'add_to_cart': {
      const item = action.payload
      const found = state.cart.find((cartCall) => cartCall.id === item.id)
      if (found) {
        return {
          ...state,
          cart: state.cart.map((cartCall) => (cartCall.id === item.id ? { ...cartCall, qty: cartCall.qty + 1 } : cartCall)),
        }
      }
      return { ...state, cart: [...state.cart, { ...item, qty: 1 }] }
    }
    case 'remove_from_cart':
      return { ...state, cart: state.cart.filter((cartCall) => cartCall.id !== action.payload) }
    case 'set_qty':
      return {
        ...state,
        cart: state.cart.map((cartCall) => (cartCall.id === action.payload.id ? { ...cartCall, qty: action.payload.qty } : cartCall)),
      }
    case 'clear_cart':
      return { ...state, cart: [] }
    case 'set_filters':
      return { ...state, filters: { ...state.filters, ...action.payload } }
    default:
      return state
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export function useStore() {
  return useContext(StoreContext)
}

export default StoreContext

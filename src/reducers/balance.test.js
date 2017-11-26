import balanceReducer from './balance'
import * as constatns from '../actions/constants'

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10
    
    expect(balanceReducer(undefined, { type: constatns.SET_BALANCE, balance }))
      .toEqual(balance)
  })
  
  it('deposits into the balance', () => {
    const deposit = 10
    const initialState = 5
    
    expect(balanceReducer(initialState, { type: constatns.DEPOSIT, deposit }))
      .toEqual(initialState + deposit)
  })
  
  it('withdraws from the balance', () => {
    const withdrawal = 10
    const initialState = 20
    
    expect(balanceReducer(initialState, { type: constatns.WITHDRAW, withdrawal }))
      .toEqual(initialState - withdrawal)
  })
})
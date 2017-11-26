import balanceReducer from './balance'
import * as constatns from '../actions/constants'

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10
    
    expect(balanceReducer(undefined, { type: constatns.SET_BALANCE, balance }))
      .toEqual(balance)
  })
})
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  const app = shallow(<App />)
  
  it('render properly', () => {
    expect(app).toMatchSnapshot()
  })
  
  it('contains a Wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true)
  })
  
  it('constains a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true)
  })
})
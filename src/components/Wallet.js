import React, { Component } from 'react'
import { connect } from 'react-redux'
import _isNumber from 'lodash/isNumber'
import _isNaN from 'lodash/isNaN'
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {
  constructor() {
    super()
    
    this.state = { balance: undefined }
  }
  
  updateBalance = (event) => {
    const balance = parseInt(event.target.value, 10)
    const isNumber = _isNumber(balance) && !_isNaN(balance)
    if (!isNumber) {
      console.error('Must input Number!')
      this.setState({ balance: '' })
      return false
    }
    this.setState({ balance })
  }
  deposit = () => this.props.deposit(this.state.balance)
  withdraw = () => this.props.withdraw(this.state.balance)
  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input
          className="input-wallet"
          value={this.state.balance}
          onChange={this.updateBalance}
        />
        <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
        <button className="btn-withdrawal" onClick={this.withdraw}>Withdraw</button>
      </div>
    )
  }
}

export default connect(
  state => ({ balance: state.balance }),
  { deposit, withdraw }
)(Wallet)
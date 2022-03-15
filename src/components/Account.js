import React, { useState } from 'react'
import '../styles/App.css'

const Account = (props) => {
  let [amount, setAmount] = useState(0)
  let [balance, setBalance] = useState(0)

  const handleDepositClick = (e) => {
    e.preventDefault()
    if (isNaN(amount) || amount < 0) {
      alert('Not a number')
    } else {
      setBalance(balance + Number(amount))
    }
    setAmount(0)
  }
  
  const handleWithdrawClick = (e) => {
    e.preventDefault()
    if (isNaN(amount) || amount < 0) {
      alert('Not a number')
    } else if (amount > balance) {
      alert(`You can't withdraw that much`)
    } else {
      setBalance(balance - Number(amount))
    }
    setAmount(0)
  }

  let balanceClass = 'balance'
  if (balance <= 0) {
    balanceClass += ' zero'
  }

  return (
    <div className="account">
      <h2>{props.name}</h2>
      <div className={balanceClass}>${balance}</div>
      <br />
      <div>
        <input
          className="input"
          type="text"
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <input
          className="btn"
          type="submit"
          value="Deposit"
          onClick={handleDepositClick}
        />
        <input
          className="btn"
          type="submit"
          value="Withdraw"
          onClick={handleWithdrawClick}
        />
      </div>
    </div>
  )
}

export default Account

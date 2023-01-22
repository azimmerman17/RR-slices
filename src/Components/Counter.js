import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../Features/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [input, setInput] = useState(0)

  const byAmountSubmit = (e) => {
    e.preventDefault()
    dispatch(incrementByAmount(Number(input)))
  }

  return (
      <div>
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>
              Increment
          </button>
          <button onClick={() => dispatch(decrement())}>
              Decrement
          </button>
          <form onSubmit={ (e) => byAmountSubmit(e) }>
            <input type='number' onChange={(e) => setInput(e.target.value)} />
            <button type='submit'>Submit</button>
          </form>
      </div>
  )
}

export default Counter

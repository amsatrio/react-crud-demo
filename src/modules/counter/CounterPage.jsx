import { useDispatch, useSelector } from "react-redux"
import { 
  increment, 
  decrement, 
  reset, 
  incrementByAmount 
} from './slice';
import { useState } from "react";

function CounterPage() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('0')
    return (
        <>
            <div>counter page</div>
            <div>count: {count}</div>
            <div>
                <button onClick={() => dispatch(decrement())}>decrement</button>
                <button onClick={() => dispatch(reset())}>reset</button>
                <button onClick={() => dispatch(increment())}>increment</button>
            </div>
            <div>
                <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}></input>
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>add amount</button>
            </div>
        </>
    )
}

export default CounterPage
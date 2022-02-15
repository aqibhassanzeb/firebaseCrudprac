import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
//  const handleincre=()=>{
//      setcount( count + 1)
//  }
//  const handledec=()=>{
//      setcount(count-1)
//  }

   const dispatch= useDispatch()

  return (
    <div>
            <h1>Value</h1>
            <h1>{count}</h1>

        <button onClick={() => dispatch(increment())}>Increment</button>
        <button disabled={count==0} onClick={() =>dispatch(decrement())}>decrement</button>

    </div>
  )
}

export default Counter
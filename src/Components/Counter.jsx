import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset,incrementByAmount } from '../features/counter/counterSlice'
import { Card, Button } from 'react-bootstrap'
import './Counter.css'
const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <Card className='counter-card p-4 shadow-lg'>
    <h2 className='text-center text-primary mb-3'>Counter</h2>
    <h1 className='text-center text-dark display-4'>{count}</h1>
    <div className='d-flex justify-content-center mt-4'>
        <Button variant="success" className='mx-3' onClick={() => dispatch(increment())}> <i className='bi bi-plus-circle'></i>  Increment</Button>
        <Button variant="warning" className='mx-3' onClick={() => dispatch(decrement())}><i className='bi bi-dash-circle'></i>Decrement</Button>
        <Button variant="danger" className='mx-3' onClick={() => dispatch(reset())}><i className='bi bi-arrow-counterclockwise'></i>Reset</Button>
        <Button variant="info" className='mx-3' onClick={() => dispatch(incrementByAmount(10))}><i className='bi bi-plus-circle'></i> Increment by 10</Button>    
    </div>
         
    </Card>
  )
}

export default Counter; 

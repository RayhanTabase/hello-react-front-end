import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchRandom } from '../Redux/store';

function Greetings() {
  const dispatch = useDispatch()
  const message = useSelector(state => state.message)

  useEffect(() => {
    dispatch(fetchRandom())
  }, [])

  return (
    <h1>{message}</h1>
  );
}

export default Greetings;

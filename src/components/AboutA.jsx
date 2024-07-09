import { useState, useEffect, useContext } from 'react';
import myContext from '../utils/myContext';


const ChildB = () => {
  const [name, setName] = useState('')
  const {msg, setMsg } = useContext(myContext)
  useEffect(() => {
    setName('Detailt页进来了')
  }, [])
  
  console.log('myCt;;',msg);

  return (
    <div>
      <h2>这是detail</h2>
      {name}
      <strong>{ msg.name}</strong>
      <button onClick={()=>{setMsg({name: '新的about', color: 'blue'}) }}>修改about</button>
    </div>
  )
}

export default ChildB;
import { useState, useEffect } from 'react';

const ChildB = () => {
  const [name, setName] = useState('')
  
  useEffect(() => {
    setName('Detailt页进来了')
  },[])

  return (
    <div>
      <h2>这是detail</h2>
      {name}
    </div>
  )
}

export default ChildB;
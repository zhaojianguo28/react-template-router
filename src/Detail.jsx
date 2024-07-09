import { useState, useEffect } from 'react';

const Detail = () => {
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

export default Detail;
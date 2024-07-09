import { useState, useEffect,  } from 'react';
import MyContext from './MyContext';


const ChildA = () => {
  const [name, setName] = useState('')

  
  useEffect(() => {
    setName('Detailt页进来了')
  }, [])
  

  return (
    <MyContext.Consumer>
      {(props) => {
        console.log('childA::',props);
        const { grandFather, setGrandFather } = props
        
        return (
          <div>
            <button onClick={() => {
              setGrandFather({name: '新-----Home',age: 88, status: 'good'})
            }}
            >修改</button>
              <div>爷爷组件传递过来的值：{grandFather.name}--{ grandFather.age}</div>
          </div>
        )
      }}
    
    </MyContext.Consumer>
    
  )
}

export default ChildA;
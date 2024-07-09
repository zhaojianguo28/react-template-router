import { useState, useEffect } from 'react';
import { useNavigate,useLocation, useSearchParams } from 'react-router-dom'

import myContext from './utils/myContext'
import AboutA from './components/AboutA'

const About = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] =  useSearchParams()

  console.log('location:',location);
  console.log('searchParams:',searchParams.get('name'));
  const [msg, setMsg] = useState({name: 'about名字', color: 'red'})
  
  useEffect(() => {
    setName('About页进来了')
  }, [])
  
    
  const goHome = () => {
    
    console.log();
    navigate('/')
  }

  return (
    <div>
      <button onClick={goHome}>去home</button>
      <h2>这是about</h2>
      {name}

      <myContext.Provider value={{msg, setMsg}}>
        <AboutA/>
      </myContext.Provider>
    </div>
  )
}

export default About;
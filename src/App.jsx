import { Suspense } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from './router'

function App() {

  return (
    <Suspense>
      <div>app页面</div>
      <RouterProvider router={routes} />
   </Suspense>
  )
}

export default App

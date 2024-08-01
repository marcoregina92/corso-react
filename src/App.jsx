import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-4 gap-10'>

        <Card
          title="Tokyo"
          imgUrl="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid.
        </Card>
        <Card
          title="New York"
          imgUrl="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perferendis sunt sint neque illum commodi perspiciatis iusto sed mollitia numquam?
        </Card>
        <Card
          title="Torino"
          imgUrl="https://images.unsplash.com/photo-1582228093539-ccc3c8bdf90d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consequatur!</p>
        </Card>
        <Card
          title="Parigi"
          imgUrl="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consequatur!</p>
        </Card>

      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm';

function handleClick() {
  alert("Ciao, sono una funzione che manda UN ALERT");
}

function handleChange(e) {
  console.log(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
}


function App() {
  const [count, setCount] = useState(0)


  // state che serve per chiamate http
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
  }, []);


  const [cities, setCities] = useState([
    {
      id: 0,
      isVisited: true,
      title: "Tokyo",
      imgUrl: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid."
    },
    {
      id: 1,
      isVisited: false,
      title: "New York",
      imgUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sunt!"
    },
    {
      id: 2,
      isVisited: true,
      title: "Torino",
      imgUrl: "https://images.unsplash.com/photo-1582228093539-ccc3c8bdf90d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, harum!"
    },
    {
      id: 3,
      isVisited: false,
      title: "Parigi",
      imgUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, a?"
    }
  ]);

  const addCity = (city) => {
    setCities([...cities, city])
  }


  return (
    <>
      <CardForm addCity={addCity}></CardForm>
      <div className='grid grid-cols-4 gap-10'>

        {/* Utilizzo di map */}

        {cities.map((city) => (
          <Card
            // mettere sempre un key univoca per iterare
            key={city.id}
            isVisited={city.isVisited}
            title={city.title}
            imgUrl={city.imgUrl}>
            {city.description}
          </Card>
        ))}
      </div>

      <div className='grid grid-cols-4 gap-10 mt-3'>

        {data.map((item) => (
          <div key={item.id} className='bg-slate-400 rounded-lg p-3'>
            <p className='text-red-600 mb-3'>userID: {item.userId}</p>
            <h2 className='font-bold text-xl mb-3 text-white'> Title: {item.title}</h2>
            <p className='text-grey-800 mb-3'>Message: {item.body}</p>
          </div>
        ))}
      </div>

      {/* Utilizzo di filter che filtra i dati */}

      {/* 
        {cities
          .filter((city) => city.isVisited)
          .map((city) => (
            <Card
              // mettere sempre un key univoca per iterare
              key={city.id}
              isVisited={city.isVisited}
              title={city.title}
              imgUrl={city.imgUrl}>
              {city.description}
            </Card>
          ))} */}

      {/* <Card
          isVisited={true}
          title="Tokyo"
          imgUrl="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid.
        </Card>
        <Card
          isVisited={false}
          title="New York"
          imgUrl="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sunt!
        </Card>
        <Card
          isVisited={true}
          title="Torino"
          imgUrl="https://images.unsplash.com/photo-1582228093539-ccc3c8bdf90d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, harum!
        </Card>
        <Card
          isVisited={false}
          title="Parigi"
          imgUrl="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, a?
        </Card> */}


      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      {/* quando si richiama una funzione con onclick non servono le () */}
      {/* <button onClick={handleClick}>Alert</button>

        <input type='text' onChange={handleChange} />

        <form onSubmit={handleSubmit}>
          <button type='submit'>Invia</button>
        </form>


      </div> */}

    </>
  )
}

export default App

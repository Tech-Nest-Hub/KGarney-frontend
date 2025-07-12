import { useEffect, useState } from "react"

interface Data {
  id : number,
  avatar: string,
  name : string,
}


function App() {
  const [data, setData] = useState<Data[]>([]);
  const [count, setcount] = useState(0);


  useEffect(() => {
    fetch('/todo') // Replace 'endpoint'
      .then(res => res.json())
      .then(data => setData(data));
  }, [count]);

  function handleClick() {
    setcount(count +1)
  }

  return (
    <div>
       {data.map(user => (
        <div key={user.id} style={{ marginBottom: '1rem' }}>
          <img src={user.avatar} alt={user.name} width={80} />
          <p>{user.name}</p>
        </div>
      ))}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App

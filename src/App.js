import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [riddle, setRiddle] = useState({})

  useEffect(() => {
  const options = {
	method: 'GET',
	headers: {
		'X-API-Key': 'Pz5s/PcmYDE3PqSzPpfvNA==Ome2rxMJlOQOmk81',
		
	}
};

fetch('https://api.api-ninjas.com/v1/riddles', options)
	.then(response => response.json())
	.then(response => setRiddle(response[0]))
	.catch(err => console.error(err));
  }, [])

const newJoke = (event) => {
  event.preventDefault()
  const options = {
    method: 'GET',
    headers: {
      'X-API-Key': 'Pz5s/PcmYDE3PqSzPpfvNA==Ome2rxMJlOQOmk81',
      
    }
  };
  
  fetch('https://api.api-ninjas.com/v1/riddles', options)
    .then(response => response.json())
    .then(response => setRiddle(response[0]))
    .catch(err => console.error(err));
}  

return (
  <div className='App'>
    <h3 className='title'>riddledogz</h3>
    <div className='riddle-container'>
    <h2>{riddle.question}</h2>
    <h3>{riddle.answer}</h3>
    <button className='button-17' onClick={newJoke}>RIDDLE ME AGAIN, BITCH!</button>
    </div>
    </div>
)
}

export default App;

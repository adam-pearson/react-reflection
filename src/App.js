import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
import Button from '@mui/material/Button';

function App() {

  const [facts, setFacts] = useState([]);


  const pullFact = () => {
    axios.get("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1")
    .then((response) => {
      setFacts(response.data)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  useEffect(() => {
    console.log(facts);
  }, [facts]);

  

  return (
    <div className="container">
      <Button variant="contained" onClick={pullFact}>
        Get Fact
      </Button>
      {facts.map((fact, index) => <h2 key={index}>{fact.fact}</h2>)}
    </div>
  );
}

export default App;

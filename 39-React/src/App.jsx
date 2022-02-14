import { useState, useEffect } from 'react';

function App() {
  const [random, setRandom] = useState('null');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((data) => data.json())
      .then((data) => {
        const ere = data.message;
        setRandom(ere);
      });
  }, []);

  //   {message: 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2171.jpg', status: 'success'}

  return (
    <div>
      <p>Hello</p>
      <img src={random}></img>
      <p>{console.log(random)}</p>
    </div>
  );
}

export default App;

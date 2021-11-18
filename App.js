import Form from './Form';
import axios from 'axios';
const url = '/api/bills';
const App = () => {
  // codigo en js que sea necesario
  const getBills = () => {
    axios.get(url)
      .then(res => console.log(res.data));
  };
  // return (lo que aparece en pantalla)
  return (
    <div>
      <h1>Mi app</h1>
      <Form title="hola" />
      <button onClick={getBills}>Consultar a /api/bills</button>
    </div>
  );
}

export default App;

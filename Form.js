import { useState } from 'react';

const Form = props => {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.log('form enviado');
    console.log(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>{props.title}</h2>
      <label>Nombre</label>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;

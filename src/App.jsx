import { Button } from "@nextui-org/react";
import { Input, Grid } from "@nextui-org/react";
import { useState } from 'react';
import './App.scss';

function App() {
  const [inputData, setInputData] = useState(null);
  const [guessedNumber, setGuessedNumber] = useState(null);

  const handleInput = (ev) =>{
    const {value} = ev.target;
    setInputData(value)
  };

  const submitGuessNumber = (ev) =>{
    ev.preventDefault();
    guessNumber(inputData, minimum, maximum)
  }

  const maximum = 10000000000;
  const minimum = 1;


  const guessNumber = (inputData, minimum, maximum) =>{
    const middle = Math.trunc(maximum - (maximum - minimum) / 2);

    if(inputData === middle){
      return middle;
    }

    if(inputData > middle){
      return guessNumber(inputData, middle, maximum);
    }

    if(inputData < middle){
      return guessNumber(inputData, minimum, middle)
    }

    setGuessedNumber(middle);
  }

  return (
    <div className="App">
      <form className='form' onSubmit={submitGuessNumber}>
        <div className='form__input'>
        <Grid>
          <Input
            bordered
            labelPlaceholder="Escribe un número"
            color="primary"
            name="guessNumber"
            onChange={handleInput} />
        </Grid>
        </div>
        <div className='form__btns'>
            <Button color="primary" auto type="submit">
              Enviar
            </Button>
        </div>
      </form>
      {guessedNumber != null && <p>El número es...{guessedNumber}</p>}
    </div>
  );
}

export default App;


import './App.css';
import { useState } from 'react';

function App() {
  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");
  const [x2, setX2] = useState("");
  const [y2, setY2] = useState("");
  const [result, setResult] = useState(+"");

  const calculate = () => {
    if (y2 === "") {
      return setResult((y1 * x2) / x1)
    }
    if (x2 === "") {
      return setResult((x1 * y2) / y1)
    }
    return setResult(NaN)
  };
  const resetButon = () => {
    setX2("");
    setY2("");
  };
  const set1080p = () => {
    setY1(1080);
    setX1(1920);
  };
  const resetAll = () => {
    setX2("");
    setY2("");
    setX1("");
    setY1("");
    setResult(+"");
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className='form'
      onSubmit={onFormSubmit}
    >
      <fieldset className='fieldset__firstImage'>
        <legend>First image</legend>
        <label>Y1
          <input
            className='fieldset__input'
            value={y1}
            onChange={({ target }) => setY1(target.value)}
          /></label>
        <label>X1
          <input
            className='fieldset__input'
            value={x1}
            onChange={({ target }) => setX1(target.value)}
          /></label>
      </fieldset>
      <fieldset className='fieldset__secondImage'>
        <legend>Second image</legend>
        <label>Y2
          <input
            className='fieldset__input'
            value={y2}
            onChange={({ target }) => setY2(target.value)}
          /></label>
        <label>X2
          <input
            className='fieldset__input'
            value={x2}
            onChange={({ target }) => setX2(target.value)}
          /></label>
      </fieldset>
      <fieldset className='fieldset__result'>
        <legend>Missing size</legend>
        <input
          className='fieldset__input'
          value={result.toFixed(2)}
          readOnly
        />
        <div
          className='buttons'
        >
          <button
            onClick={calculate}
            type='submit'
          >Calculate</button>
          <button
            onClick={set1080p}
          >1st pic: 1080p</button>
          <button
            onClick={resetButon}
          >Reset second image</button>
          <button
            onClick={resetAll}
          >Reset all</button>
        </div>
      </fieldset>
    </form>
  );
}

export default App;

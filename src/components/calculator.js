import { useState } from 'react';
import calculate from './logic/calculate';

export default function Calculator() {
  const [calcObj, setCalcObj] = useState({
    total: '',
    next: '',
    operation: '',
  });
  const handleClick = (e) => {
    const buttonName = e.target.name;
    setCalcObj((prevState) => ({
      ...calculate(prevState, buttonName),
    }));
  };

  const { total, next, operation } = calcObj;
  return (
    <div className="calculator-container">
      <div className="cal-screen">
        <span>{ next || operation || total || ''}</span>
      </div>
      <form className="calculator-digits" name="calculator">
        <input type="button" name="AC" value="AC" onClick={handleClick} />
        <input type="button" name="+/-" value="+/-" onClick={handleClick} />
        <input type="button" name="%" value="%" onClick={handleClick} />
        <input
          type="button"
          name="÷"
          value="÷"
          className="peach-color divide"
          onClick={handleClick}
        />
        <input type="button" name="7" value="7" onClick={handleClick} />
        <input type="button" name="8" value="8" onClick={handleClick} />
        <input type="button" name="9" value="9" onClick={handleClick} />
        <input
          type="button"
          name="x"
          value={'\u00D7'}
          className="peach-color"
          onClick={handleClick}
        />
        <input type="button" name="4" value="4" onClick={handleClick} />
        <input type="button" name="5" value="5" onClick={handleClick} />
        <input type="button" name="6" value="6" onClick={handleClick} />
        <input
          type="button"
          name="-"
          value={'\u2212'}
          className="peach-color"
          onClick={handleClick}
        />
        <input type="button" name="3" value="3" onClick={handleClick} />
        <input type="button" name="2" value="2" onClick={handleClick} />
        <input type="button" name="1" value="1" onClick={handleClick} />
        <input
          type="button"
          name="+"
          value={'\u1429'}
          className="peach-color"
          onClick={handleClick}
        />
        <input
          type="button"
          name="0"
          value="0"
          className="zero"
          onClick={handleClick}
        />
        <input type="button" name="." value="." onClick={handleClick} />
        <input
          type="button"
          name="="
          value={'\u003D'}
          className="peach-color"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

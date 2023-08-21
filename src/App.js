import './App.css';
import React, {useState} from 'react';

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e)=>{
    setValue(value.concat(e.target.name));
  }

  return (
    <div className="container">
      <div className='calculator'>
        <h1>My Calculator</h1>

        <div className="display">
          <input type="text"  value={value} readOnly />
        </div>

        <div>
        <button onClick={()=> setValue("")} id="clear">AC</button>
        <button onClick={() => setValue(value.slice(0,-1))}  >DE</button>
        <button onClick={handleClick} name=".">.</button>
        <button onClick={handleClick} name="/">/</button>
        </div>

        <div>
        <button onClick={handleClick} name="7">7</button>
        <button onClick={handleClick} name="8">8</button>
        <button onClick={handleClick} name="9">9</button>
        <button onClick={handleClick} name="*">*</button>
        </div>

        <div>
        <button onClick={handleClick} name="4"> 4</button>
        <button onClick={handleClick} name="5">5</button>
        <button onClick={handleClick} name="6">6</button>
        <button onClick={handleClick} name="+">+</button>
        </div>

        <div>
        <button onClick={handleClick} name="1">1</button>
        <button onClick={handleClick} name="2">2</button>
        <button onClick={handleClick} name="3">3</button>
        <button onClick={handleClick} name="-">-</button>
        </div>

        <div>
        <button onClick={handleClick} name="00">00</button>
        <button onClick={handleClick} name="0">0</button>
        <button onClick={() => setValue(eval(value).toString())} id="equal">=</button>
        </div>

      </div>
    </div>
  );
}

export default App;

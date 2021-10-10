import React, {useState} from 'react';
import '../static/calculator.css'

const Calculator = () => {
    const {result,setResult} = useState("");
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    return(
        <>
            <div className="container">
                <input type="text" value={result}/>
                <div className="keypad">
                    <button onClick={handleClick}>Clear</button>
                    <button onClick={handleClick}>C</button>
                    <button onClick={handleClick} name="/">&divide;</button>
                    <button onClick={handleClick} name="7">7</button>
                    <button onClick={handleClick} name="8">8</button>
                    <button onClick={handleClick} name="9">9</button>
                    <button onClick={handleClick} name="*">&times;</button>
                    <button onClick={handleClick} name="4">4</button>
                    <button onClick={handleClick} name="5">5</button>
                    <button onClick={handleClick} name="6">6</button>
                    <button onClick={handleClick} name="-">-</button>
                    <button onClick={handleClick} name="1">1</button>
                    <button onClick={handleClick} name="2">2</button>
                    <button onClick={handleClick} name="3">3</button>
                    <button onClick={handleClick} name="+">+</button>
                    <button onClick={handleClick} name="0">0</button>
                    <button onClick={handleClick} name=".">.</button>
                    <button onClick={handleClick} name="=">=</button>
                </div>
            </div>
        </>
    )
}

export default Calculator;
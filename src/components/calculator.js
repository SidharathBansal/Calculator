import React, {useState} from 'react';
import '../static/calculator.css'

const Calculator = () => {
    const {result,setResult} = useState("");
    return(
        <>
            <div className="container">
                <input type="text" value={result}/>
                <div className="keypad">
                    <button>Clear</button>
                    <button>C</button>
                    <button>&divide;</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>&times;</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>
            </div>
        </>
    )
}

export default Calculator;
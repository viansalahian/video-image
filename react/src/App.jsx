import { useState } from 'react';
import './App.css';

function App() {
    const [text, setText] = useState('');
    const [display, setDisplay] = useState('');

    const handleClick = () => {
        setDisplay(text);
        setText('');
    };

    return (
        <div className="container">
            <h3>{display}</h3>
            <div className="inner-container">
                <input
                    className="input-box"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter a text"
                />
                <div className="btn" onClick={handleClick}>Show Text</div>
            </div>
        </div>
    );
}

export default App;

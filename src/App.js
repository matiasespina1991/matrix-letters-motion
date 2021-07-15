import './App.css';
import LettersContainer from './components/LettersContainer';
import PatternSelection from './components/PatternSelection';
import { useState } from 'react';

function App() {

  const [ patternNumber, setPatternNumber ] = useState(0);

  return (
    <div className="App">
      <div className="parent-container">
        <PatternSelection setPatternNumber={setPatternNumber} />
        <LettersContainer patternNumber={patternNumber} setPatternNumber={setPatternNumber} />
        <div>{patternNumber}</div>
      </div>
    </div>
  );
}

export default App;

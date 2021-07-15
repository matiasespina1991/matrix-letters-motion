import patternsJSON from './data.json';
import {useState} from 'react';

function LettersContainer(patternNumber, setPatternNumber) {

let [ defaultValue , setDefaultValue ] = useState(0);

let currentPattern = patternsJSON[0].pattern;


    // let lettersString = "ABCDEFGHIJ/KLMNOPQRST/UVWXYZ1234";
    // const lettersBreakSplit = lettersString.split("/");

    return (
            <>
                <div className="letters-container-wrap">
                    {patternsJSON[0].pattern}
                </div>

                {defaultValue}

            {}
                {/* <div className="letters-container-wrap">
                    <div className="letters-container">
                        {
                            lettersBreakSplit.map(
                                function(line, id) {
                                    return <div key={id} className="letters-line">
                                        {line.split('').map(
                                                            (letter, id) => <div key={id} className="letter">{letter}</div>
                                                        )
                                        }
                                    </div>
                                } 
                            )
                        }
                    </div>
                </div> */}


{/*         
        <div className="letters-container-wrap">
            <div className="letters-container">
                {
                    lettersBreakSplit.map(
                        function(line, id) {
                            return <div key={id} className="letters-line">
                                {line.split('').map(
                                                    (letter, id) => <div key={id} className="letter">{letter}</div>
                                                )
                                }
                            </div>
                        } 
                    )
                }
            </div>
        </div> */}
            </>
    )
}


export default LettersContainer;
import patternsJSON from './data.json';

function LettersContainer(patternNumber, setPatternNumber) {

    let lettersString = "ABCDEFGHIJ/KLMNOPQRST/UVWXYZ1234";
    const lettersBreakSplit = lettersString.split("/");

    return (
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
        </div>
    )
}


export default LettersContainer;
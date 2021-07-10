function LettersContainer() {

    let lettersString = "ABCDEFGHIJKLMNOPQRST/UVWXYZ123456789101112";
    const lettersBreakSplit = lettersString.split("/");

    return (
        <div class="letters-container-wrap">
            <div class="letters-container">
                {
                    lettersBreakSplit.map(
                        function(line) {
                                return <div class="letters-line">
                                            {line.split('').map(
                                                                    (letter) => <div class="letter">{letter}</div>
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
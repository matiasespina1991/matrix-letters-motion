function LettersContainer() {

    let lettersString = "ABCDEFGHIJ/KLMNOPQRST/UVWXYZ1234";
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
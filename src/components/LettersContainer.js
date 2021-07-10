function LettersContainer() {

    let lettersString = "ABCDEFGHIJKLMNOPQRST/UVWXYZ123456789101112";
    const lettersBreakSplit = lettersString.split("/");
    // const lettersArraySplit = lettersString.split("")

    return (
        <div class="letters-container-wrap">
            <div class="letters-container">
                {/* {
                    lettersArraySplit.map(
                        (letter) => {
                            return <div class="letter">{letter}</div>
                        }
                    )
                } */}
                {
                    lettersBreakSplit.map(
                        (line) => {
                            return <>
                                    {line} <br /> 
                                </>

                            // <div class="letter-line">{line}</div>
                        }
                    )
                }
            </div>
        </div>
    )
}


export default LettersContainer;
import patternsJSON from './data.json';
import { useState } from 'react';

function PatternSelection({setPatternNumber}) {

    return(
        <>
            <select
                name="pattern-selection-list"
                onChange={(e)=>setPatternNumber(e.target.value)}
            >
                    {patternsJSON.map((json, index) =>(
                        <option key={json.id} value={index}>{json.id}</option>
                    ))} 
            </select>
        </>
    )
}

export default PatternSelection;
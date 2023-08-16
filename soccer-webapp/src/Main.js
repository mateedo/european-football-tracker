import React from "react"
import EPL from "./leagues/EPL"
import LALIGA from "./leagues/LALIGA"
import SERIEA from "./leagues/SERIEA"
import BUNDESLIGA from "./leagues/BUNDESLIGA"
import UCL from "./leagues/UCL"
import "./Main.css"

export default function Main() {

    const [display, updateDisplay] = React.useState({
        epl: true,
        laliga: false,
        bundesliga: false,
        seriea: false,
        ucl: false
    })

    function handleClick(event) {
        const val = event.target.value
        event.preventDefault()
        updateDisplay({
            epl: val === "epl" ? true : false,
            laliga: val === "laliga" ? true : false,
            bundesliga: val === "bundesliga" ? true : false,
            seriea: val === "seriea" ? true : false,
            ucl: val === "ucl" ? true : false
        })
    }


    return(
        <div>
            <div className="league-buttons">
                <button onClick={handleClick} value="epl">Premier League</button>
                <button onClick={handleClick} value="laliga">La Liga</button>
                <button onClick={handleClick} value="bundesliga">Bundesliga</button>
                <button onClick={handleClick} value="seriea">Serie A</button>
                <button onClick={handleClick} value="ucl">Champions League</button>
            </div>
            <p className="small-text">made by mateo</p>



            {display.epl && <EPL />}
            {display.laliga && <LALIGA />}
            {display.seriea && <SERIEA />}
            {display.bundesliga && <BUNDESLIGA />}
            {display.ucl && <UCL />}

        </div>


    )
}
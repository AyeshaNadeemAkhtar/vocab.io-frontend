import { useState } from "react"

export default function MultiSelect({ options=[], title}) {
    const [selected, setSelected] = useState([])

    console.log("MultiSelect is working...") /* bp */
    console.log(options) /* bp */

    const toggleOption = (option) => {
        let newSelected;

        if (selected.includes(option)) {
            newSelected = selected.filter(o => o != option)
        }
        else
        {
            newSelected = [...selected, option]
        }
        setSelected(newSelected)
    }
    return (
        <div>
            <h2>{title}</h2>
            {options.map((option) => {
                return (
                <button
                key={option}
                onClick={() => toggleOption(option)}
                style={{
                    background: selected.includes(option) ? "lightblue" : "red"
                }}
                >
                {option}
                </button>
                )
            })}
     
        </div>
    )
}
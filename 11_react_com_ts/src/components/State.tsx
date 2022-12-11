
import React, { useState, ChangeEvent } from "react"

// 
const State = () => {

    const [text, setText] = useState<string | null>(null);

    // 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    // 
    return (

        <div>

            <p>Parágrafo: {text}</p>

            <label>
                <input
                    type="text"
                    onChange={handleChange}
                    title='#'
                />
            </label>

        </div>
    )
}

export default State

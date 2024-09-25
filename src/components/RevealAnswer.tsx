import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);
    function toggleRevealed(): void {
        setRevealed(revealed ? false : true);
    }

    return (
        <span>
            <button onClick={toggleRevealed}>Reveal Answer</button>
            {revealed ?
                <div>42</div>
            :   <div></div>}
        </span>
    );
}

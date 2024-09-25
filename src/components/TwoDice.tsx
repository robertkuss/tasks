import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeft] = useState<number>(1);
    const [rightDie, setRight] = useState<number>(2);

    function updateLeft(): void {
        setLeft(d6);
    }

    function updateRight(): void {
        setRight(d6);
    }

    return (
        <div>
            <span data-testid="left-die">{leftDie} </span>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={updateLeft}>Roll Left</Button>
            <Button onClick={updateRight}>Roll Right</Button>
            <div>
                {leftDie === 1 && rightDie === 1 ?
                    <div>Lose</div>
                : leftDie === rightDie ?
                    <div>Win</div>
                :   <div></div>}
            </div>
        </div>
    );
}

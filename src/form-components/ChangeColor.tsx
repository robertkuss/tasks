import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    let colorOptions: string[] = [
        "red",
        "yellow",
        "blue",
        "green",
        "orange",
        "purple",
        "white",
        "cyan",
        "magenta",
    ];
    const [chosenColor, setChosenColor] = useState<string>(colorOptions[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colorOptions.map((option: string) => (
                <div key={option}>
                    <Form.Check
                        inline
                        style={{ backgroundColor: option }}
                        type="radio"
                        name={option}
                        onChange={updateColor}
                        label={option}
                        value={option}
                        checked={chosenColor === option}
                    />
                </div>
            ))}
            <body>
                You have chosen{" "}
                <body
                    data-testId="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </body>
            </body>
        </div>
    );
}

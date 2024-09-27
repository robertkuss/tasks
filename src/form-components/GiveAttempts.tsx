import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function useAttempt(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function updateAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        setAttemptsRequested(parseInt(event.target.value) || 0);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <Form.Group>
                <Form.Label>Request Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateAttemptsRequested}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + attemptsRequested);
                }}
            >
                gain
            </Button>
        </div>
    );
}

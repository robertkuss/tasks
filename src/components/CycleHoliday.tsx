import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🤡");
    let holidayAlph: string[] = ["🤡", "🦇", "🎄", "🎃", "🦃"];
    let holidayYear: string[] = ["🤡", "🦇", "🎃", "🦃", "🎄"];

    function nextAlphabetically(holiday: string): void {
        let index: number = holidayAlph.indexOf(holiday);
        index === holidayAlph.length - 1 ?
            setHoliday(holidayAlph[0])
        :   setHoliday(holidayAlph[index + 1]);
    }

    function nextYear(holiday: string): void {
        let index: number = holidayYear.indexOf(holiday);
        index === holidayYear.length - 1 ?
            setHoliday(holidayYear[0])
        :   setHoliday(holidayYear[index + 1]);
    }

    return (
        <div>
            Cycle Holiday: {holiday}
            <div>
                <Button
                    onClick={() => {
                        nextAlphabetically(holiday);
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        nextYear(holiday);
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}

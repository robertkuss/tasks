import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [currentQuestionType, setCurrentQuestionType] =
        useState<QuestionType>("short_answer_question");
    function changeQuestionType(): void {
        setCurrentQuestionType(
            currentQuestionType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <span>
            <Button onClick={changeQuestionType}>Change Type</Button>
            <div>
                {currentQuestionType === "short_answer_question" ?
                    <span>Short Answer</span>
                :   <span>Multiple Choice</span>}
            </div>
        </span>
    );
}

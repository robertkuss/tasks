import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {name}
                {isStudent ?
                    <p>is a student</p>
                :   <p>is not a student</p>}
            </div>
            <div>
                <Form.Group controlId="name">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        disabled={!editMode}
                        value={name}
                        onChange={updateName}
                    />
                </Form.Group>
            </div>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            <Form.Check
                disabled={!editMode}
                type="checkbox"
                id="is-student-check"
                label="Student"
                checked={isStudent}
                onChange={updateStudent}
            />
        </div>
    );
}

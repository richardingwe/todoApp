import React from 'react';
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";


export default function EditForm({ editTodo, id, task, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm();
        }}>
            <TextField
                margin="normal"
                label="Edit Todo"
                value={value}
                onChange={handleChange}
                fullWidth
            />
        </form>
    );
}

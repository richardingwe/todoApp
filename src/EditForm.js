import React, { useContext } from 'react';
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.context";

export default function EditForm({ id, task, toggleEditForm }) {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "EDIT", id: id, newTask: value });
            reset();
            toggleEditForm();
        }}
            style={{
                marginLeft: "1rem",
                width: "100%",
            }}
        >
            <TextField
                margin="normal"
                label="Edit Todo"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    );
}

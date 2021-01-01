import React from 'react';
import useInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";


export default function TodoForm(props) {
    const [value, handleChange, reset] = useInputState("");
    const { addTodo } = props;
    return (
        <Paper>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField value={value} onChange={handleChange} />
            </form>
        </Paper>
    );
}

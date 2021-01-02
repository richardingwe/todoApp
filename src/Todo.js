import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemtext from "@material-ui/core/ListItemtext";
import Checkbox from "@material-ui/core/Checkbox";
import Iconbutton from "@material-ui/core/Iconbutton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function Todo({ task, completed, removeTodo, id, toggleTodo }) {
    return (
        <ListItem>
            <Checkbox
                tabIndex={-1}
                checked={completed}
                onClick={() => toggleTodo(id)}
            />
            <ListItemtext style={{ textDecoration: completed ? "line-through" : "none" }}>
                {task}
            </ListItemtext>
            <ListItemSecondaryAction>
                <Iconbutton onClick={() => removeTodo(id)} >
                    <DeleteIcon aria-label="Delete" />
                </Iconbutton>
                <Iconbutton>
                    <EditIcon aria-label="Edit" />
                </Iconbutton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

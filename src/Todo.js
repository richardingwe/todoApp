import React, { useContext } from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemtext from "@material-ui/core/ListItemtext";
import Checkbox from "@material-ui/core/Checkbox";
import Iconbutton from "@material-ui/core/Iconbutton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "./hooks/useToggle";
import EditTodoForm from "./EditForm";
import { DispatchContext } from "./context/todos.context";


export default function Todo({ task, completed, id }) {
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm toggleEditForm={toggle} id={id} task={task} />
            ) : (
                    <>
                        <Checkbox
                            tabIndex={-1}
                            checked={completed}
                            onClick={() => dispatch({ type: "TOGGLE", id: id })}
                        />
                        <ListItemtext style={{ textDecoration: completed ? "line-through" : "none" }}>
                            {task}
                        </ListItemtext>
                        <ListItemSecondaryAction>
                            <Iconbutton onClick={() => dispatch({ type: "REMOVE", id: id })} >
                                <DeleteIcon aria-label="Delete" />
                            </Iconbutton>
                            <Iconbutton onClick={toggle}>
                                <EditIcon aria-label="Edit" />
                            </Iconbutton>
                        </ListItemSecondaryAction>
                    </>
                )}
        </ListItem>
    );
}

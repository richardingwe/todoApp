import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemtext from "@material-ui/core/ListItemtext";
import Divider from "@material-ui/core/Divider";


export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <ListItem>
                            <ListItemtext>
                                {todo.task}
                            </ListItemtext>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
}

import React, { memo } from "react";
import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
const TodoListItem = memo((props) => (
  <ListItem divider={props.divider}>
    <Checkbox
      onClick={props.onCheckBoxToggle}
      checked={props.checked}
      disableRipple
    />
    <ListItemText primary={props.title} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
        <DeleteOutline />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
));
export default TodoListItem;

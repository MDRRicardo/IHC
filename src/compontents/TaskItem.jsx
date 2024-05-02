import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// TODO - Add implementation - add some improvement
const TaskItem = ({ task, onDelete }) => {
  return (
    <ListItem>
      <ListItemText primary={task} />
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;

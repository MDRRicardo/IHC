import React from 'react';
import { ListItem, ListItemText, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({ task, onDelete }) => {
  return (
    <ListItem>
      <ListItemText primary={task} />
      <Tooltip title="Eliminar" arrow>
        <IconButton onClick={onDelete} aria-label="Eliminar">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

export default TaskItem;

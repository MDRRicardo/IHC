import React, { useState } from 'react';
import { List, TextField, Button, Box } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    // TODO - Add implementation
  };

  const handleDeleteTask = (index) => {
    // TODO - Add implementation
  };

  return (
    <Box sx={{
      bgcolor: 'yellow',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      gap: 1
    }}>
      <Box>
        <TextField
          sx={{ width: '100%' }}
          label="Nova Tarefa"
          variant="outlined"
          value={taskInput}
          onChange={() => console.log('// TODO - Add implementation')}
        />
      </Box>
      <Box>
        <Button
          sx={{ width: '100%' }}
          variant="contained"
          onClick={handleAddTask}
        >
          Adicionar
        </Button>
      </Box>
      <List>
      {/* TODO - Add implementation to list and delete the task */}
      </List>
    </Box>
  );
};

export default TaskList;

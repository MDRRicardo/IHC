import React, { useState } from 'react';
import { List, TextField, Button, Box } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Box sx={{
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
          onChange={(e) => setTaskInput(e.target.value)}
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
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </List>
    </Box>
  );
};

export default TaskList;

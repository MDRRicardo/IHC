import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TaskList from "./compontents/TaskList";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <TaskList />
      </Box>
    </Container>
  );
}

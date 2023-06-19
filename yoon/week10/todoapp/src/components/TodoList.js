import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <TextField
        label="Add Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddTodo}>
        Add
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={handleGoBack}>
        Go Back
      </Button>
    </Box>
  );
};

export default TodoList;

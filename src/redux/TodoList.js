import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./slice/todoSlice";
import { Container,InputField,Button,TodoItem,TodoUlist,TodoText } from "./StyledComponent";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <Container>
      <h1>TodoList</h1>
      <InputField
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={handleAddTodo}>Add</Button>
      <TodoUlist>
        {todos.map((todo) => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <TodoText>{todo.text}</TodoText>
            <Button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </Button>
          </TodoItem>
        ))}
      </TodoUlist>
    </Container>
  );
};

export default TodoList;

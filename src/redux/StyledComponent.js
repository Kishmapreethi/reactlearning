import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
`;

export const InputField = styled.input`
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
   font-size: 16px; /* Size of the input text */
  
  ::placeholder {
    font-size: 18px; /* Size of the placeholder text */
    color: #888; /* Optional: Change placeholder text color */
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TodoUlist = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

export const TodoItem = styled.li`
  width:300px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const TodoText = styled.span`
  flex-grow: 1;
  margin-left: 10px;
`;
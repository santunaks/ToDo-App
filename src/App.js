import { useState } from "react";
import "./App.css";
import RenderItem from "./components/RenderItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [marked, setMarked] = useState([]);

  //function to capture input text
  const onChangeTextHandler = (e) => {
    setNewTask(e.target.value);
  };

  //function to handle submit button click
  const onSubmitHandler = (event) => {
    setTasks([...tasks, newTask]);
    event.preventDefault();
    setNewTask("");
  };

  //function to handle click on task item
  const onClickHandler = (id) => {
    setMarked([...marked, id]);
  };

  //function to handle clear button click
  const onClearClickHandler = () => {
    const alteredTasks = tasks.filter((item, index) => {
      return !marked.includes(index);
    });
    setTasks(alteredTasks);
    setMarked([]);
  };

  // functions related to UI
  const renderItems = () => {
    return tasks.map((item, index) => {
      return (
        <RenderItem
          marked={marked.includes(index)}
          key={index}
          text={item}
          onClick={() => onClickHandler(index)}
        />
      );
    });
  };

  const renderClearButton = () => {
    return (
      <div className="clear-button">
        <button onClick={onClearClickHandler}>Clear Completed</button>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            value={newTask}
            placeholder="Enter task..."
            onChange={(e) => onChangeTextHandler(e)}
          />

          <input
            type="submit"
            value="Submit"
            onClick={(event) => onSubmitHandler(event)}
          />
        </form>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      {renderItems()}
      {renderClearButton()}
      {renderForm()}
    </div>
  );
}

export default App;

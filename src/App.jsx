import { useState } from "react";
import Button from "./components/Button";
import Task from "./components/Task";
import tasks from "./mock/task";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(tasks);
  const [filteredData, setFilteredData] = useState(tasks);

  const toggleStatus = (id) => {
    const changedData = data.map((task) => {
      if (task.id === id) {
        const isDone = task.status === "active" ? false : true;
        task.status = isDone ? "active" : "completed";
        return task;
      }
      return task;
    });
    setData(changedData);
    // setFilteredData(changedData);
  };

  const createTask = () => {
    const newTask = {
      id: Math.random(),
      text: inputValue,
      status: "active",
    };

    setFilteredData([...filteredData, newTask]);
    setData([...data, newTask]);
    setInputValue("");
  };

  const deleteTask = (id) => {
    const filteredData = data.filter((task) => task.id !== id);
    setData(filteredData);
    setFilteredData(filteredData);
  };

  const clearCompleted = () => {
    const filteredData = data.filter((task) => task.status === "active");
    setData(filteredData);
    setFilteredData(filteredData);
  };

  const filterCompleted = () => {
    const filteredData = data.filter((task) => task.status === "completed");
    setFilteredData(filteredData);
  };

  const filterActive = () => {
    const filteredData = data.filter((task) => task.status === "active");
    setFilteredData(filteredData);
  };

  const clearFilter = () => {
    setFilteredData(data);
  };

  return (
    <div className="flex justify-center bg-[#F3F4F6] h-screen w-screen pt-[60px]">
      <div className="w-[377px] h-fit bg-white shadow-md rounded-[6px] py-6 px-4 flex flex-col items-center gap-5">
        <p className="text-xl font-semibold text-center">To-Do List</p>
        <div className="flex justify-between w-full gap-[6px]">
          <input
            type="text"
            className="w-full border border-[#71717A] px-4 py-2 rounded-md"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <Button text="Add" handleClick={createTask} />
        </div>
        <div className="flex  w-full gap-[6px]">
          <Button text="All" handleClick={clearFilter} />
          <Button text="Active" handleClick={filterActive} />
          <Button text="Completed" handleClick={filterCompleted} />
        </div>
        {/* task */}
        {filteredData.map((task) => {
          return (
            <Task
              {...task}
              key={task.id}
              deleteTask={deleteTask}
              toggleStatus={toggleStatus}
            />
          );
        })}

        {/* task stat */}
        <div className="pt-4 pb-1 border-t border-[#6B7280] text-sm flex justify-between w-full items-center">
          <p className="text-[#6B7280]">1 of 2 tasks completed</p>
          <button
            onClick={clearCompleted}
            className=" text-[#EF4444] bg-[#FEF2F2] px-3 py-[6px] rounded-md"
          >
            Clear completed
          </button>
        </div>
        <p className="mt-5 text-xs text-[#6B7280]">
          Powered by{" "}
          <a href="https://www.instagram.com/" className="text-[#3B73ED]">
            Pinecone academy
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;

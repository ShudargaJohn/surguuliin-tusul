import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex justify-center ">
      <div className="container flex flex-col justify-center align-middle">
        <h1 className="text-xl ">User Management</h1>
        <div className="flex flex-col align-middle ">
          <p>Name</p>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <p>Phone</p>
          <input type="text" />
          <p>Email</p>
          <input type="text" />
          <button>Add User</button>
        </div>
        <div>
          <div>
            <p>{inputValue}</p>
            <p></p>
            <p></p>
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

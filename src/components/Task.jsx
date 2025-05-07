import { useState } from "react";

const Task = (props) => {
  const isDone = props.status === "active" ? false : true;

  const [isChecked, setIsChecked] = useState(isDone);

  return (
    <div
      key={props.id}
      className="flex justify-between w-full bg-[#F3F4F6] items-center  p-[16px] text-sm h-[62px] rounded-md"
    >
      <div className="flex gap-[10px] items-center">
        <input
          type="checkbox"
          className="w-5 h-5 "
          onClick={() => {
            props.toggleStatus(props.id);
            setIsChecked(!isChecked);
          }}
          checked={isChecked}
        />
        <p>{props.text}</p>
      </div>
      <button
        onClick={() => props.deleteTask(props.id)}
        className=" text-[#EF4444] bg-[#FEF2F2] px-3 py-[6px] rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;

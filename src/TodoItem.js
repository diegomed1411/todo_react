import "./styles/TodoItem.css";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}>
        <MdDelete />
        </span>
    </li>
  );
};


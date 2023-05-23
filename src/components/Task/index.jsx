import styles from "./task.module.css";
import { AiOutlineBorder, AiFillCheckSquare } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? (
          <AiFillCheckSquare size={30} />
        ) : (
          <AiOutlineBorder size={30} />
        )}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <FaTrash size={20} />
      </button>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faFile,
  faPenSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import { FC } from "react";
import { TodoType } from "../../../interface/Todo";
import { useTodoList } from "./useTodoList";

type Props = {
  todoList: Array<TodoType>;
  handleDeleteTodo: (targetId: number, targetTitle: string) => void;
};

export const TodoList: FC<Props> = ({ todoList, handleDeleteTodo }) => {
  const [{ handleMoveDetailPage, handleMoveEditPage }] = useTodoList();

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} className={styles.todo}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.area}>
            <div className={styles.far}>
              <FontAwesomeIcon
                icon={faFile}
                size="lg"
                onClick={() => handleMoveDetailPage(todo.id)}
              />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon
                icon={faPenSquare}
                size="lg"
                onClick={() => handleMoveEditPage(todo.id)}
              />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="lg"
                onClick={() => handleDeleteTodo(todo.id, todo.title)}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

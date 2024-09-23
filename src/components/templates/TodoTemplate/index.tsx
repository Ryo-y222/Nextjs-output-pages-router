import { InputForm } from "../../atoms/InputForm";
import { BaseLayout } from "../../organisms/BaseLayout";
import { TodoList } from "../../organisms/TodoList";
import { useTodoTemplate } from "./useTodoTemplate";
import { useTodoContext } from "../../../contexts/TodoContext";
import styles from "./style.module.css";

export const TodoTemplate = () => {
  // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
  const { originTodoList, deleteTodo } = useTodoContext();

  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] =
    useTodoTemplate({ originTodoList });
  return (
    <BaseLayout title={"TodoList"}>
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm
            value={searchKeyword}
            placeholder={"Search Keyword"}
            onChange={handleChangeSearchKeyword}
          />
        </div>
        <div className={styles.area}>
          {showTodoList?.length > 0 && (
            <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

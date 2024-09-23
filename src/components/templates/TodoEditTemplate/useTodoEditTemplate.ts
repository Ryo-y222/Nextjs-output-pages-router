import { useMemo, useState, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import { TodoType } from "../../../interface/Todo";
import { EventType } from "../../../interface/Event";
import { useRouter } from "next/router";

type Params = {
  originTodoList: Array<TodoType>;
  updateTodo: (id: number, title: string, content: string) => void;
};

type StatesType = {
  todo: TodoType | undefined;
  inputTitle: string;
  inputContent: string;
};

type ActionTypes = {
  handleChangeTitle: EventType["onChangeInput"];
  handleChangeContent: EventType["onChangeTextArea"];
  handleUpdateTodo: EventType["onSubmit"];
};

/**
 * useTodoEditTemplate
 * @param originTodoList
 * @param updateTodo
 */

export const useTodoEditTemplate = ({ originTodoList, updateTodo }: Params) => {
  // const navigate = useNavigate();
  const router = useRouter();

  // const { id } = useParams();

  // const todo = useMemo(
  //   () => originTodoList.find((todo) => String(todo.id) === id),
  //   [id, originTodoList]
  // );
  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === router?.query?.id),
    [router?.query?.id, originTodoList]
  );

  const [inputTitle, setInputTitle] = useState(todo?.title || "");

  const [inputContent, setInputContent] = useState(todo?.content || "");

  /**
   * 「Title変更処理」
   * @type {function(*): void}
   */

  const handleChangeTitle: EventType["onChangeInput"] = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );

  /**
   * 「content」変更処理
   * @type {function(*):void}
   */
  const handleChangeContent: EventType["onChangeTextArea"] = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  /**
   * Todo更新処理
   * @type {function(*): void|*}
   */
  const handleUpdateTodo: EventType["onSubmit"] = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo?.id && inputTitle !== "" && inputContent !== "") {
        updateTodo(todo.id, inputTitle, inputContent);
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [router, todo?.id, inputTitle, inputContent, updateTodo]
  );
  const states: StatesType = {
    todo,
    inputTitle,
    inputContent,
  };

  const actions: ActionTypes = {
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };

  return [states, actions] as const;
};

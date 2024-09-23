import { useContext, createContext, ReactNode } from "react";
import { useTodo } from "../hooks/useTodo";
import { FC } from "react";
import { TodoType } from "../interface/Todo";

type Props = {
  children: ReactNode;
};

interface ContextInterface {
  originTodoList: Array<TodoType>;
  addTodo: (title: string, content: string) => void;
  updateTodo: (id: number, title: string, content: string) => void;
  deleteTodo: (targetId: number, targetTitle: string) => void;
}

const TodoContext = createContext({} as ContextInterface);

export const TodoProvider: FC<Props> = ({ children }) => {
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/**
 * useTodoContext
 */
export const useTodoContext = () => useContext(TodoContext);

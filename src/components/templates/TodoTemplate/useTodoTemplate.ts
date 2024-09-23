/**
 * useTodoTemplate
 *
 * @package hooks
 */

import { useMemo, useState, useCallback } from "react";
import { TodoType } from "../../../interface/Todo";
import { EventType } from "../../../interface/Event";

type Params = {
  originTodoList: Array<TodoType>;
};

type StatesType = {
  searchKeyword: string;
  showTodoList: Array<TodoType>;
};

type ActionsType = {
  handleChangeSearchKeyword: EventType["onChangeInput"];
};

/**
 * useTodoTemplate
 * @param originTodoList
 * @returns {[{showTodoList:*, searchKeyword: string},{handleChangeSearchKeyword:
 * (function(*):void)}]}
 */

export const useTodoTemplate = ({ originTodoList }: Params) => {
  /* 検索キーワード*/
  const [searchKeyword, setSearchKeyword] = useState("");

  /* 表示用Todoリスト*/
  const showTodoList = useMemo(() => {
    const regexp = new RegExp("^" + searchKeyword, "i");
    return originTodoList?.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  /**
   *
   * 検索キーワード更新処理
   *@pram {*}e
   */

  const handleChangeSearchKeyword: EventType["onChangeInput"] = useCallback(
    (e) => setSearchKeyword(e.target.value),
    []
  );

  const states: StatesType = {
    searchKeyword,
    showTodoList,
  };

  const actions: ActionsType = {
    handleChangeSearchKeyword,
  };
  return [states, actions] as const;
};

import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import { useRouter } from "next/router";

type ActionTypes = {
  handleMoveDetailPage: (id: number) => void;
  handleMoveEditPage: (id: number) => void;
};

/**
 * useTodoList
 */

export const useTodoList = () => {
  // const navigate = useNavigate();
  const router = useRouter();

  /**
   * 詳細ページに遷移する処理
   * @param {*}id
   * @type {function(*):void}
   */

  // const handleMoveDetailPage = useCallback(
  //   (id: number) => navigate(`${NAVIGATION_PATH.DETAIL}${id}`),
  //   [navigate]
  // );
  const handleMoveDetailPage = useCallback(
    (id: number) => router.push(`${NAVIGATION_PATH.DETAIL}${id}`),
    [router]
  );

  /**
   * 編集ページに遷移する処理
   * @param {*}id
   * @type {function(*):void}
   */

  // const handleMoveEditPage = useCallback(
  //   (id: number) => navigate(`${NAVIGATION_PATH.EDIT}${id}`),
  //   [navigate]
  // );
  const handleMoveEditPage = useCallback(
    (id: number) => router.push(`${NAVIGATION_PATH.EDIT}${id}`),
    [router]
  );

  const actions: ActionTypes = {
    handleMoveDetailPage,
    handleMoveEditPage,
  };

  return [actions] as const;
};

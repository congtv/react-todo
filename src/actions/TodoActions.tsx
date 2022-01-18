import * as types from "../constains/TodoActionType";

export default {
  addTodo: (todoContent: string) => {
    return { type: types.ADD_TODO, payload: { content: todoContent } };
  },
  editTodo: (todoId: string, todoContent: string) => {
    return {
      type: types.EDIT_TODO,
      payload: { id: todoId, content: todoContent },
    };
  },
  deleteTodo: (todoId: string) => {
    return { type: types.DELETE_TODO, payload: { id: todoId } };
  },
};

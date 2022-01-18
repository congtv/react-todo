import * as types from "../constains/TodoActionType";
import * as utils from "../common/Utils";
import * as interfaces from "../interfaces/TodoInterfaces";

const initialState: interfaces.TodoStateModel = {
  todoModels: [],
};

const TodoReducers = (
  state: interfaces.TodoStateModel = initialState,
  action: any
) => {
  switch (action.type) {
    case types.ADD_TODO:
      let newTodo: interfaces.TodoModel = {
        content: action.payload,
        id: utils.createGuid(),
      };

      return {
        ...state,
        todoModels: [...state.todoModels, newTodo],
      };

    case types.EDIT_TODO:
      return {
        ...state,
        todoModels: state.todoModels.map((x) =>
          x.id === action.payload.id
            ? { ...x, content: action.payload.content }
            : x
        ),
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todoModels: state.todoModels.filter((x) => x.id != action.payload.id),
      };
  }
};

export default TodoReducers;
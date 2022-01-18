export interface TodoModel {
  id: string;
  content: string;
}

export interface TodoStateModel {
  todoModels: TodoModel[];
}

export type CounterState = {
  count: number;
  status: string;
};

export const initialState: CounterState = {
  count: 0,
  status: "Pending",
};

type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};

type SetStatus = {
  type: "setStatus";
  payload: "active" | "inactive";
};

type CounterAction = UpdateCountAction | SetStatus;

export const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "setStatus":
      return { ...state, status: action.payload };
    default:
      const unexpectedActionType: never = action;
      throw new Error(`unexpected action type: ${unexpectedActionType}`);
  }
};

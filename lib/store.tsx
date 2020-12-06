import React, { createContext, useContext, useReducer } from "react";

export interface GlobalStore {
  address: string;
}

export interface StoreAction {
  type: string;
  payload: any;
}

const initialState: GlobalStore = {
  address: "",
};

const StoreContext = createContext<{
  state: GlobalStore;
  dispatch: React.Dispatch<StoreAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: GlobalStore, action: StoreAction) => {
  switch (action.type) {
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

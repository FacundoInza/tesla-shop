import { FC, ReactNode, useReducer } from "react";
import { UiContext } from "./";
import { uiReducer } from "./";

export interface UiState {
  isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
  isMenuOpen: false,
};

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "UI - ToggleMenu" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,

        //methods
        toggleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

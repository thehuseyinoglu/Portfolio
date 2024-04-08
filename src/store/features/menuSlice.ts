import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
  page: number;
  menuPage: number;
  robotState: boolean;
}

const initialState: MenuState = {
  page: 0,
  menuPage: 0,
  robotState: false,
};

export const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    changeMenuPage: (state, action: PayloadAction<number>) => {
      state.menuPage = action.payload;
    },
    changeRobotStateDisabled: (state, action: PayloadAction<boolean>) => {
      state.robotState = action.payload;
    },
    changeRobotState: (state) => {
      state.robotState = !state.robotState;
    },
  },
});

export const { changePage, changeMenuPage, changeRobotState,changeRobotStateDisabled } =
  MenuSlice.actions;

export default MenuSlice.reducer;

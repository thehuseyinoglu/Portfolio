import { createSlice } from "@reduxjs/toolkit";

export interface PhoneState {
  power: boolean;
  charging: boolean;
}

const initialState: PhoneState = {
  power: false,
  charging:false
};

export const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
  
    powerChange:(state)=>{
      state.power = !state.power;
    },
    changeCharging: (state) => {
      state.charging = !state.charging;
    },
  },
});

export const { powerChange,changeCharging } = phoneSlice.actions;

export default phoneSlice.reducer;

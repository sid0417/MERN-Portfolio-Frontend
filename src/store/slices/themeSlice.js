import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Get initial theme from cookies (default to false if not set)
const initialDarkMode = Cookies.get("darkMode") === "true"; // Convert string to boolean

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: initialDarkMode, 
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      Cookies.set("darkMode", state.darkMode, { expires: 7 }); // Store in cookies for 7 days
    },
  },
});


export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

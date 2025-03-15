import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Get initial theme from cookies, or default to dark (true) if not set
const initialDarkMode = Cookies.get("darkMode") === "false" ? false : true; // Default to true if no cookie or cookie is not "false"

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: initialDarkMode,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      Cookies.set("darkMode", state.darkMode, { expires: 7 });
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
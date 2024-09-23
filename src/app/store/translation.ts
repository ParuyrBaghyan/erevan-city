import { createSlice } from "@reduxjs/toolkit";
import en from "@/app/translations/english.json";
import am from "@/app/translations/armenian.json";
import ru from "@/app/translations/russian.json";

interface TranslationInitailState {
  language: any;
  showDepDDBool: any;
  showDepDD: any;
}

const initialState: TranslationInitailState = {
  language: en,
  // !localStorage.getItem("langId")
  //   ? en
  //   : localStorage.getItem("langId") == "2"
  //   ? ru
  //   : localStorage.getItem("langId") == "3"
  //   ? am
  //   : en,
  showDepDDBool: undefined,
  showDepDD: undefined,
};

export const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    changeLanguage(state, { payload }) {
      if (payload === 1) {
        state.language = en;
        localStorage.setItem("langId", "1");
        document.cookie =
          "lang=en; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax; Secure";
        state.language = en;
      } else if (payload === 2) {
        state.language = ru;
        localStorage.setItem("langId", "2");
        document.cookie =
          "lang=ru; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax; Secure";
        state.language = ru;
      } else {
        state.language = am;
        localStorage.setItem("langId", "3");
        document.cookie =
          "lang=am; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax; Secure";
      }
    },
  },
});

export const { changeLanguage } = translationSlice.actions;
export default translationSlice.reducer;

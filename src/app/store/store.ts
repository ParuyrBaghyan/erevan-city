"use client";
import { configureStore } from "@reduxjs/toolkit";
import { yerevanCityApi } from "../services/api";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import utilsReducer from "./utilsSlice";
import searchReducer from "./searchSlice";
import promoReducer from "./promo";
import { bannerApi } from "../services/banner";
import { animationsApi } from "../services/animations";
import { categoriesApi } from "../services/categories";
import { countriesApi } from "../services/countries";
import { searchApi } from "../services/search";
import { promoApi } from "../services/promo";
import { branchesApi } from "../services/allWeb";
import { partnerDiscountsApi } from "../services/partnerDiscounts";
import translationReducer from "./translation";

export const store = configureStore({
  reducer: {
    translation: translationReducer,
    utils: utilsReducer,
    search: searchReducer,
    promo: promoReducer,
    [yerevanCityApi.reducerPath]: yerevanCityApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [animationsApi.reducerPath]: animationsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [promoApi.reducerPath]: promoApi.reducer,
    [branchesApi.reducerPath]: branchesApi.reducer,
    [partnerDiscountsApi.reducerPath]: partnerDiscountsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      yerevanCityApi.middleware,
      bannerApi.middleware,
      animationsApi.middleware,
      categoriesApi.middleware,
      countriesApi.middleware,
      searchApi.middleware,
      promoApi.middleware,
      branchesApi.middleware,
      partnerDiscountsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
